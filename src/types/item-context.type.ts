import type { ItemType } from "./item.type";
import type { ModalType } from "./modal-type.type";

export type ItemsContextType = {
  items: ItemType[];
  addItem: (item: Omit<ItemType, "id" | "createdAt">) => void;
  editItem: (id: string, data: Partial<ItemType>) => void;
  deleteItem: (id: string) => void;
  selectedItem: ItemType | null;
  setSelectedItem: (item: ItemType | null) => void;
  showModal: ModalType;
  setShowModal: (status: ModalType) => void;
  deleteAllItems: () => void;
};
