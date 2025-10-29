import { Modal } from "../modal/modal";
import { Form } from "../form/form";
import { CreateItemButton } from "../button/create-item-button";
import type { ReactElement } from "react";
import { useItems } from "../../context/items-context";

export function EmptyList(): ReactElement {
  const { showModal } = useItems();

  return (
    <>
      <div className="flex items-center flex-col gap-y-3">
        <img
          className="w-100 h-100"
          src="list-empty.png"
          alt="list-empty.png"
        />
        <h3>Your list is empty!</h3>
        <p>Do you want to add one?</p>
        <CreateItemButton />
      </div>
      {showModal && (
        <Modal
          children={
            <Form
              title="Create New Item"
              text="please add Your Items..."
            ></Form>
          }
        />
      )}
    </>
  );
}
