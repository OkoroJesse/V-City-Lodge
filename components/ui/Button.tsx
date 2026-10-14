import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C4993A]/50 disabled:opacity-50 disabled:pointer-events-none text-center rounded-none select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3 text-sm uppercase tracking-wider",
    lg: "px-8 py-4 text-sm font-semibold uppercase tracking-widest",
  };

  const variantStyles = {
    primary:
      "bg-[#C4993A] text-[#080B12] hover:bg-[#D4B25E] shadow-lg shadow-[#C4993A]/10 active:scale-[0.99]",
    secondary:
      "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40",
    outline:
      "border border-[#C4993A]/60 text-[#D4B25E] hover:bg-[#C4993A] hover:text-[#080B12] hover:border-[#C4993A]",
    gold:
      "bg-gradient-to-r from-[#C4993A] via-[#E2CB8B] to-[#AA7C2E] text-[#080B12] font-semibold hover:brightness-110 shadow-lg shadow-[#C4993A]/20 active:scale-[0.99]",
    ghost:
      "text-white/80 hover:text-white hover:bg-white/5",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
