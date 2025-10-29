import type { ReactElement } from "react";
import { cn } from "../../utils/cn";
import { IoCloseSharp } from "react-icons/io5";
import { useItems } from "../../context/items-context";

interface ModalPropsType {
  className?: string;
  children: ReactElement;
}

export function Modal({ className, children }: ModalPropsType): ReactElement {
  const { setShowModal } = useItems();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black opacity-60 transition-opacity"
        onClick={() => setShowModal(null)}
      />

      <div
        className={cn(
          "relative bg-white rounded-lg shadow-xl border border-gray-200 w-full max-w-md",
          className
        )}
      >
        <button
          type="button"
          onClick={() => setShowModal(null)}
          className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
        >
          <IoCloseSharp className="w-6 h-6" />
        </button>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
