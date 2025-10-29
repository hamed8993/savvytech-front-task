import { type ReactElement } from "react";
import { Item } from "./item";
import type { ItemType } from "../../types/item.type";
import { EmptyList } from "./emtpy-list";
import { useItems } from "../../context/items-context";
import { Modal } from "../modal/modal";
import { Form } from "../form/form";
import { RemoveConfirmation } from "../modal/remove-confirmation";
import { CreateItemButton } from "../button/create-item-button";
import { FaTrash } from "react-icons/fa";
import { Button } from "../button/button";

export function ItemsList(): ReactElement {
  const { items, selectedItem, showModal, setShowModal } = useItems();

  return (
    <div className="bg-gray-300 p-6 rounded-2xl">
      {items && items.length > 0 && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Items List (
              <span className="text-sm font-normal text-gray-500">
                {items.length}
              </span>
              )
            </h2>
            <CreateItemButton />
          </div>

          <div className="flex justify-end mb-6">
            <Button
              label="Delete All"
              icon={<FaTrash className="w-4 h-4" />}
              btnClass="bg-white px-3 py-1.5 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors duration-150"
              clickHandler={() => setShowModal("remove-all")}
            />
          </div>

          <div className="space-y-4">
            {items
              .slice()
              .reverse()
              .map((item: ItemType) => (
                <Item key={item.id} item={item} />
              ))}
          </div>
        </>
      )}

      {!items || (items.length === 0 && <EmptyList />)}

      {showModal && (
        <Modal>
          {showModal === "edit" ? (
            <Form title="Edit" text={`Edit the ${selectedItem?.title}`} />
          ) : ["remove", "remove-all"].includes(showModal) ? (
            <RemoveConfirmation />
          ) : (
            <Form title="Create New Item" text="Add a new item to the list" />
          )}
        </Modal>
      )}
    </div>
  );
}
