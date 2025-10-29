import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ItemsContextType } from "../types/item-context.type";
import type { ItemType } from "../types/item.type";
import { v4 as uuidv4 } from "uuid";
import { generateFakeItems } from "../storage/fake-list";
import type { ModalType } from "../types/modal-type.type";

const ItemsContext = createContext<ItemsContextType | null>(null);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<ItemType[]>(generateFakeItems(5));
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
  const [showModal, setShowModal] = useState<ModalType>(null);

  const addItem = (item: Omit<ItemType, "id" | "createdAt">) => {
    const newItem: ItemType = {
      id: uuidv4(),
      title: item.title,
      subtitle: item.subtitle,
      createdAt: new Date(),
    };
    setItems((prev) => [...prev, newItem]);
  };

  const editItem = (id: string, data: Partial<ItemType>) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  const deleteAllItems = () => {
    setItems([]);
  };

  useEffect(() => {
    if (showModal === null) {
      setSelectedItem(null);
    }
  }, [showModal]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        addItem,
        editItem,
        deleteItem,
        selectedItem,
        setSelectedItem,
        showModal,
        setShowModal,
        deleteAllItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) throw new Error("useItems must be used inside ItemsProvider");
  return context;
};
