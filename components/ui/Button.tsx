import Link from "next/link";
import { MessageCircle } from "lucide-react";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  showWhatsAppIcon?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-pitaua-ink text-pitaua-paper hover:bg-pitaua-border focus-visible:ring-pitaua-ink",
  secondary:
    "bg-pitaua-earth text-pitaua-ink hover:bg-pitaua-ochre focus-visible:ring-pitaua-earth",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1da851] focus-visible:ring-[#25D366]",
  ghost:
    "bg-transparent text-pitaua-earth hover:bg-pitaua-earth/10 focus-visible:ring-pitaua-earth",
  outline:
    "bg-transparent border-2 border-pitaua-earth text-pitaua-earth hover:bg-pitaua-earth hover:text-pitaua-paper focus-visible:ring-pitaua-earth",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  external = false,
  showWhatsAppIcon = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {showWhatsAppIcon && <MessageCircle size={size === "lg" ? 22 : 18} aria-hidden />}
      {children}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
