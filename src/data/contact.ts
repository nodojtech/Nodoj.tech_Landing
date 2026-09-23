export const contact = {
  phoneDisplay: "+57 312 660 2217",
  phoneInternational: "573126602217",

  email: "nodojtech@gmail.com",

  website: "https://nodoj.tech",

  social: {
    instagram: {
      handle: "@nodoj.tech",
      url: "https://instagram.com/nodoj.tech",
    },
  },
};

export const whatsappUrl = (
  message = "Hola, vi la página de Nodo J y quisiera conocer más sobre sus soluciones."
) =>
  `https://wa.me/${contact.phoneInternational}?text=${encodeURIComponent(
    message
  )}`;
