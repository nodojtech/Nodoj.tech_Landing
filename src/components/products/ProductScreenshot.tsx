import { useState } from "react";
import type { ProductScreenshot as ProductScreenshotData } from "@/data/products";

type ProductScreenshotProps = {
  screenshot: ProductScreenshotData;
};

const ProductScreenshot = ({
  screenshot,
}: ProductScreenshotProps) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  return (
    <figure className="overflow-hidden rounded-[20px] border border-border bg-card">
      <img
        src={screenshot.src}
        alt={screenshot.alt}
        loading="lazy"
        className="w-full object-cover object-top"
        onError={() => setFailed(true)}
      />

      {screenshot.label && (
        <figcaption className="border-t border-border px-5 py-4 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
          {screenshot.label}
        </figcaption>
      )}
    </figure>
  );
};

export default ProductScreenshot;
