import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "dark",
  className = "",
  id,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-3 mb-4 ${isCenter ? "" : ""}`}>
          <span className="h-px w-8 bg-[#C8A24A]" />
          <span className="text-[11px] uppercase font-semibold tracking-[0.25em] text-[#C8A24A]">
            {eyebrow}
          </span>
          {isCenter && <span className="h-px w-8 bg-[#C8A24A]" />}
        </div>
      )}

      <h2
        id={id}
        className={`font-serif font-normal tracking-tight leading-[1.12] ${
          theme === "dark" ? "text-white" : "text-[#101114]"
        }`}
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base font-light leading-relaxed ${
            theme === "dark" ? "text-[#A6A6A6]" : "text-[#101114]/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
