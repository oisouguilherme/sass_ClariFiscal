interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  href,
}: ButtonProps) {
  const baseStyles =
    "px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer";

  const variants = {
    primary: "bg-green-600 hover:bg-green-700 text-green-600 hover:text-white",
    secondary:
      "bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600",
  };

  const Component = href ? "a" : "button";
  const extraProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick };

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...extraProps}
    >
      {children}
    </Component>
  );
}
