import { CreateItemButton } from "../button/create-item-button";
import type { ReactElement } from "react";

export function EmptyList(): ReactElement {
  return (
    <>
      <div className="min-h-[60vh] flex justify-center px-4">
        <div className="flex flex-col items-center text-center max-w-md mx-auto">
          <div className="mb-8">
            <div className="relative mx-auto w-64 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64">
              <img
                src="/list-empty.png"
                alt="Empty list - Start organizing your items"
                className="w-full h-full object-contain drop-shadow-lg"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-2xl sm:text-3xl items-center font-bold text-gray-900 tracking-tight">
              Your list is empty!
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
              Ready to get organized? Create your first item and start building
              your list.
            </p>
          </div>

          <div className="mb-6 flex justify-center">
            <CreateItemButton />
          </div>

          <p className="text-sm text-gray-500 max-w-xs mx-auto">
            Click the button above to add your first item
          </p>
        </div>
      </div>
    </>
  );
}
