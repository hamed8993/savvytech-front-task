import type { ReactElement, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type ButtonPropType = {
  label: string;
  clickHandler: () => void;
  icon?: ReactNode;
  btnClass?: string;
  disabled?: boolean;
};

export function Button({
  label,
  clickHandler,
  icon,
  btnClass,
  disabled = false,
}: ButtonPropType): ReactElement {
  
  
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={!disabled ? clickHandler : undefined}
      className={cn(
        "cursor-pointer flex items-center gap-x-2 rounded-lg px-4 py-2 text-white font-medium transition-all duration-200",
        disabled
          ? "bg-gray-400 cursor-not-allowed opacity-70"
          : "bg-blue-800 hover:bg-blue-900 active:scale-[0.97]",
        btnClass
      )}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{label}</span>
    </button>
  );
}
