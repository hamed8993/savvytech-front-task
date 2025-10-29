import { type ReactElement } from "react";
import { Item } from "./item";
import type { ItemType } from "../../types/item.type";
import { EmptyList } from "./emtpy-list";
import { useItems } from "../../context/items-context";
import { Modal } from "../modal/modal";
import { Form } from "../form/form";
import { RemoveModal } from "../modal/remove.modal";
import { CreateItemButton } from "../button/create-item-button";
import { FaTrash } from "react-icons/fa";
import { Button } from "../button/button";

export function ItemsList(): ReactElement {
  const { items, selectedItem, showModal, setShowModal } = useItems();
  console.log("showModal>>>", showModal);
  return (
    <>
      {items && items.length > 0 && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Items List(
              <span className="text-sm font-normal text-gray-500">
                {items?.length || 0}
              </span>
              )
            </h2>
            <CreateItemButton />
          </div>
          <div className="flex justify-between items-center mb-6">
            <Button
              label="Delete All"
              icon={<FaTrash className="w-4 h-4" />}
              btnClass="bg-white px-3 py-1.5 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors duration-150"
              clickHandler={() => setShowModal("remove-all")}
            />
          </div>
        </>
      )}

      {items && items.length > 0 ? (
        <div className="space-y-3">
          {items
            .slice()
            .reverse()
            .map((item: ItemType) => (
              <Item key={item.id} item={item} />
            ))}
        </div>
      ) : (
        <EmptyList />
      )}

      {showModal && (
        <Modal
          children={
            showModal === "edit" ? (
              <Form title="Edit" text={`Edit the ${selectedItem?.title}`} />
            ) : showModal === "remove" || showModal === "remove-all" ? (
              <RemoveModal />
            ) : (
              <Form title="Create New Item" text="Add a new item to the list" />
            )
          }
        />
      )}
    </>
  );
}
