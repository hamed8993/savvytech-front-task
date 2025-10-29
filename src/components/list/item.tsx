import type { ReactElement } from "react";
import type { ItemType } from "../../types/item.type";
import { formatDate } from "../../utils/format-date";
import type { ModalType } from "../../types/modal-type.type";
import { Button } from "../button/button";
import { useItems } from "../../context/items-context";

export type ItemPropsType = {
  item: ItemType;
};

export function Item({ item }: ItemPropsType): ReactElement {
  const { setSelectedItem, setShowModal } = useItems();

  const handleShowModal = (item: ItemType, modalType: ModalType) => {
    setSelectedItem(item);
    setShowModal(modalType);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200 group">
      <div className="flex flex-col items-start">
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-150">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
        <span className="text-xs text-gray-400 mt-2">
          {formatDate(item.createdAt)}
        </span>
      </div>

      <div className="flex gap-2 mt-3 sm:mt-0">
        <Button
          label="Edit"
          btnClass="bg-white px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors duration-150"
          clickHandler={() => handleShowModal(item, "edit")}
        />
        <Button
          label="Delete"
          btnClass="bg-white px-3 py-1.5 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors duration-150"
          clickHandler={() => handleShowModal(item, "remove")}
        />
      </div>
    </div>
  );
}
