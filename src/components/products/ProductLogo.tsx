import { useEffect, useState } from "react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type ProductLogoProps = {
  product: Product;
  className?: string;
  fallbackClassName?: string;
  preferLight?: boolean;
  fallback?: "name" | "none";
};

const ProductLogo = ({
  product,
  className,
  fallbackClassName,
  preferLight = true,
  fallback = "name",
}: ProductLogoProps) => {
  const logoSrc =
    preferLight && product.brand?.logoLight
      ? product.brand.logoLight
      : product.brand?.logo;

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [logoSrc]);

  if (!logoSrc || hasError) {
    if (fallback === "none") {
      return null;
    }

    return (
      <span
        className={cn(
          "font-heading text-xl font-semibold tracking-[-0.025em] text-foreground",
          fallbackClassName,
        )}
      >
        {product.name}
      </span>
    );
  }

  return (
    <img
      src={logoSrc}
      alt={`Logo de ${product.name}`}
      className={cn("w-auto object-contain", className)}
      onError={() => setHasError(true)}
    />
  );
};

export default ProductLogo;
