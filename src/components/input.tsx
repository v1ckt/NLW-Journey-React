import { ComponentProps, ReactNode } from "react";

interface TextInputProps extends ComponentProps<"input"> {
  title: string;
  children: ReactNode;
}

export function TextInput({ title, children, ...props }: TextInputProps) {
  return (
    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
      {children}
      <input
        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        {...props}
        placeholder={title}
      />
    </div>
  );
}
