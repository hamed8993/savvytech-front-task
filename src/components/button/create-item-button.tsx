import type { ReactElement } from "react";
import { Button } from "./button";
import { MdPlaylistAdd } from "react-icons/md";
import { useItems } from "../../context/items-context";

export function CreateItemButton(): ReactElement {
  const { setShowModal } = useItems();

  return (
    <Button
      label="Create New"
      icon={<MdPlaylistAdd className="mt-1" />}
      btnClass="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm 
                     hover:bg-blue-700 hover:shadow-md active:scale-95 transition-all duration-150"
      clickHandler={() => setShowModal("create")}
    />
  );
}
