import type { ReactElement } from "react";
import { Button } from "../button/button";
import { FaExclamationTriangle, FaTrash, FaTimes } from "react-icons/fa";
import { useItems } from "../../context/items-context";

export function RemoveConfirmation(): ReactElement {
  const { selectedItem, deleteItem, deleteAllItems, setShowModal, showModal } =
    useItems();

  const removeHandler = () => {
    if (showModal == "remove") {
      deleteItem(selectedItem?.id as string);
    } else {
      deleteAllItems();
    }
    setShowModal(null);
  };

  return (
    <div className="text-center">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
        <FaExclamationTriangle className="h-6 w-6 text-red-600" />
      </div>

      <div className="flex flex-col gap-y-2 mb-10">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Delete {showModal == "remove" ? "Item" : "All items"}?
        </h3>

        <p className="text-sm text-gray-500 mb-6">
          Are you sure you want to delete{" "}
          <strong>
            "{showModal == "remove" ? selectedItem?.title : "All Items"}"
          </strong>
          ? This action cannot be undone.
        </p>
      </div>

      <div className="flex gap-3 justify-center">
        <Button
          label="Cancel"
          clickHandler={() => setShowModal(null)}
          icon={<FaTimes className="w-4 h-4" />}
          btnClass="bg-white text-gray flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-800 transition-colors duration-150"
        />
        <Button
          clickHandler={removeHandler}
          icon={<FaTrash className="w-4 h-4" />}
          btnClass="bg-red-600 text-white flex items-center gap-2 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-150"
          label="Remove"
        />
      </div>
    </div>
  );
}
