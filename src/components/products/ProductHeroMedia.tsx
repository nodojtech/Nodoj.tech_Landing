import { useEffect, useState } from "react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type ProductHeroMediaProps = {
  product: Product;
  className?: string;
  imageClassName?: string;
};

const ProductHeroMedia = ({
  product,
  className,
  imageClassName,
}: ProductHeroMediaProps) => {
  const heroImage = product.media?.heroImage;
  const heroVideo = product.media?.heroVideo;

  const [videoFailed, setVideoFailed] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setVideoFailed(false);
    setImageFailed(false);
  }, [heroImage, heroVideo]);

  const canShowVideo = Boolean(heroVideo) && !videoFailed;
  const canShowImage = Boolean(heroImage) && !imageFailed;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[20px] border border-border bg-surface-2",
        className,
      )}
    >
      {canShowVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={canShowImage ? heroImage : undefined}
          className="h-full w-full object-cover object-top"
          onError={() => setVideoFailed(true)}
        >
          <source
            src={heroVideo}
            type={product.media?.videoType ?? "video/webm"}
          />
        </video>
      ) : canShowImage ? (
        <img
          src={heroImage}
          alt={`${product.name} en funcionamiento`}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover object-top",
            imageClassName,
          )}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="relative flex h-full min-h-[280px] flex-col justify-between p-6 md:min-h-[360px] md:p-8">
          <div
            className="pointer-events-none absolute inset-0 bg-brand-grid opacity-25"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="brand-kicker text-primary">
              Producto
            </p>
          </div>

          <div className="relative">
            <p className="font-heading text-2xl font-medium text-foreground">
              {product.name}
            </p>

            <p className="mt-3 max-w-[42ch] font-body text-sm leading-relaxed text-muted-foreground">
              Estamos preparando una vista real de esta plataforma.
            </p>

            <div
              className="mt-6 grid grid-cols-3 gap-2"
              aria-hidden="true"
            >
              <div className="h-2 rounded-full bg-border-strong" />
              <div className="h-2 rounded-full bg-border" />
              <div className="h-2 rounded-full bg-border" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductHeroMedia;
