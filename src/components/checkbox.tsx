import { CircleCheck, CircleDashed } from "lucide-react";
import { useState } from "react";

interface CheckBoxProps {
  checked: boolean;
  onChange?: () => void;
  children: React.ReactNode;
  isRight?: boolean;
  className?: string;
}

export function CheckBox({
  checked,
  onChange,
  children,
  isRight = false,
  className,
}: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <label
      className={className ? className : "flex items-center gap-2 flex-1"}
      onClick={handleCheck}
    >
      {isRight && <span className="flex flex-1 items-center">{children}</span>}
      {checked || isChecked ? (
        <CircleCheck className="text-lime-300 size-5" />
      ) : (
        <CircleDashed className="text-zinc-400 size-5" />
      )}
      {isRight === false && <span className="flex flex-1 items-center">{children}</span>}
    </label>
  );
}
