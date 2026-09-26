#!/usr/bin/env bash
#
# Despliegue de nodoj.tech en el VPS.
#
#   cd /var/www/nodoj-source
#   ./deploy.sh            construye y publica
#   ./deploy.sh --seco     solo muestra qué haría, sin copiar nada
#
# Variables que puedes sobreescribir:
#   RAMA=main ./deploy.sh              despliega otra rama (por defecto landing-v2)
#   PUBLICO=/otra/ruta ./deploy.sh     publica en otra carpeta (por defecto /var/www/nodoj.tech)
#
set -euo pipefail

RAMA="${RAMA:-landing-v2}"
PUBLICO="${PUBLICO:-/var/www/nodoj.tech}"
REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SECO=""
[ "${1:-}" = "--seco" ] && SECO="--dry-run"

titulo() { printf '\n\033[1m== %s ==\033[0m\n' "$1"; }
aviso()  { printf '   %s\n' "$1"; }
morir()  { printf '\n\033[31mAbortado: %s\033[0m\n' "$1" >&2; exit 1; }

cd "$REPO"

titulo "1. Revisión previa"
[ -d .git ] || morir "esto no parece el repo ($REPO)"
[ -d "$PUBLICO" ] || morir "no existe la carpeta que publica nginx: $PUBLICO"
if [ -n "$(git status --porcelain)" ]; then
  git status --short
  morir "hay cambios sin subir en el servidor.
   Súbelos antes:  git add -A && git commit -m 'cambios del servidor' && git push
   O descártalos:  git checkout -- ."
fi
aviso "repo limpio en $REPO"
aviso "publica en $PUBLICO"

titulo "2. Traer la rama $RAMA"
git checkout "$RAMA"
ANTES="$(git rev-parse --short HEAD)"
git pull --ff-only origin "$RAMA"
AHORA="$(git rev-parse --short HEAD)"
if [ "$ANTES" = "$AHORA" ]; then
  aviso "sin cambios nuevos (sigue en $AHORA), se reconstruye igual"
else
  aviso "$ANTES -> $AHORA"
  git log --oneline "$ANTES..$AHORA" | sed 's/^/   /'
fi

titulo "3. Construir"
if [ -f package-lock.json ]; then
  npm ci || npm install
else
  npm install
fi
npm run build

titulo "4. Revisar el build antes de publicar"
for f in dist/index.html dist/jacobo/index.html dist/jacobo/contacto.vcf \
         dist/juanpablo/index.html dist/juanpablo/contacto.vcf; do
  [ -s "$f" ] || morir "falta o está vacío: $f (no publico nada)"
  aviso "ok  $f  ($(stat -c%s "$f") bytes)"
done

titulo "5. Publicar en $PUBLICO"
rsync -av --delete $SECO dist/ "$PUBLICO/"
if [ -n "$SECO" ]; then
  printf '\n\033[33mEnsayo terminado. Nada se copió. Corre ./deploy.sh sin --seco para publicar.\033[0m\n'
  exit 0
fi

titulo "6. Comprobar en el sitio"
if command -v curl >/dev/null 2>&1; then
  for p in jacobo juanpablo; do
    url="https://www.nodoj.tech/$p/"
    cod="$(curl -s -o /tmp/nodoj-$p.html -w '%{http_code}' --max-time 25 "$url" || echo 000)"
    tit="$(grep -o '<title>[^<]*</title>' "/tmp/nodoj-$p.html" 2>/dev/null | head -1)"
    aviso "$url -> $cod  $tit"
    [ "$cod" = "200" ] || aviso "   ¡ojo! no respondió 200"
    case "$tit" in
      *"Nodo J"*) ;;
      *) aviso "   ¡ojo! el título no es el de la tarjeta: puede estar mostrando la landing" ;;
    esac
  done
  cod="$(curl -s -o /dev/null -w '%{http_code}' --max-time 25 https://www.nodoj.tech/ || echo 000)"
  aviso "https://www.nodoj.tech/ -> $cod"
else
  aviso "curl no está instalado, sáltate esta comprobación"
fi

printf '\n\033[32mListo. Publicado %s de la rama %s.\033[0m\n' "$AHORA" "$RAMA"
