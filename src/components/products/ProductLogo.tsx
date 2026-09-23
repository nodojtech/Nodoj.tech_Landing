import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type ProductLogoProps = {
  product: Product;
  className?: string;
  fallbackClassName?: string;
  variant?: "logo" | "icon";
  preferLight?: boolean;
  fallback?: "name" | "none";
};

const ProductLogo = ({
  product,
  className,
  fallbackClassName,
  variant = "logo",
  preferLight = true,
  fallback = "name",
}: ProductLogoProps) => {
  const sources = useMemo(() => {
    const brand = product.brand;

    if (!brand) {
      return [];
    }

    const preferred =
      variant === "icon"
        ? [
            brand.icon,
            preferLight ? brand.logoLight : undefined,
            brand.logo,
          ]
        : [
            preferLight ? brand.logoLight : undefined,
            brand.logo,
            brand.icon,
          ];

    return preferred.filter(
      (src, index, array): src is string =>
        Boolean(src) && array.indexOf(src) === index
    );
  }, [product.brand, variant, preferLight]);

  const sourceKey = sources.join("|");
  const [sourceIndex, setSourceIndex] = useState(0);

  useEffect(() => {
    setSourceIndex(0);
  }, [sourceKey]);

  const currentSource = sources[sourceIndex];

  if (!currentSource) {
    if (fallback === "none") {
      return null;
    }

    return (
      <span
        className={cn(
          "font-heading text-xl font-semibold tracking-[-0.025em] text-foreground",
          fallbackClassName
        )}
      >
        {product.name}
      </span>
    );
  }

  return (
    <img
      src={currentSource}
      alt={`Logo de ${product.name}`}
      className={cn("w-auto object-contain", className)}
      onError={() => setSourceIndex((current) => current + 1)}
    />
  );
};

export default ProductLogo;
