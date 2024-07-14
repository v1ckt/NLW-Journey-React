import { ReactNode, ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  secondary?: boolean;
  iconFirst?: boolean;
  full?: boolean;
}

export function Button({
  iconFirst = false,
  secondary = false,
  children,
  full = false,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={
        "rounded-lg px-5 py-2 font-mediun flex items-center justify-center gap-2 " +
        (iconFirst ? "flex-row-reverse " : "flex-row ") +
        (full ? "w-full " : "") +
        (secondary ? "bg-zinc-800 text-zinc-200" : "bg-lime-300 text-lime-950")
      }
    >
      {children}
    </button>
  );
}
