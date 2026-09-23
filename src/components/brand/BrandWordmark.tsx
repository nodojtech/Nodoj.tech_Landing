import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type BrandWordmarkProps = {
  className?: string;
};

const BrandWordmark = ({ className }: BrandWordmarkProps) => (
  <Link
    to="/"
    aria-label="Nodo J - Inicio"
    className={cn(
      "inline-flex items-center font-heading font-semibold tracking-[-0.03em] text-foreground",
      className,
    )}
  >
    Nodo <span className="ml-1 text-primary">J</span>
  </Link>
);

export default BrandWordmark;
