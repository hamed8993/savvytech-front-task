import { useEffect, type ReactElement } from "react";
import { Input } from "../input/input";
import { useForm } from "../../hooks/use-form";
import { Button } from "../button/button";
import { TfiWrite } from "react-icons/tfi";
import { useItems } from "../../context/items-context";
import type { ItemType } from "../../types/item.type";

type FormPropsType = {
  title: string;
  text: string;
};

export function Form({ title, text }: FormPropsType): ReactElement {
  const { fields, setFields } = useForm();
  const { addItem, editItem, selectedItem, setShowModal, showModal } =
    useItems();

  const isEditing = showModal === "edit";

  const submitHandler = () => {
    if (isEditing) {
      editItem((selectedItem as ItemType).id, {
        title: fields.title,
        subtitle: fields.subtitle,
      });
    } else {
      addItem({ title: fields.title, subtitle: fields.subtitle });
    }
    setShowModal(null);
  };

  useEffect(() => {
    if (selectedItem) {
      setFields({
        title: selectedItem.title || "",
        subtitle: selectedItem.subtitle || "",
      });
    } else {
      setFields({ title: "", subtitle: "" });
    }
  }, [selectedItem, setFields]);

  const canSubmitForm = (): boolean => {
    return fields?.title?.length > 0 && fields?.subtitle?.length > 0;
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{text}</p>
      </div>

      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        ط
        <Input
          label="Title"
          name="title"
          placeHolder="Enter title"
          initialValue={fields.title}
          onValueChange={(val) => setFields({ ...fields, title: val })}
        />
        <Input
          label="Sub Title"
          name="subtitle"
          placeHolder="Enter subtitle"
          initialValue={fields.subtitle}
          onValueChange={(val) => setFields({ ...fields, subtitle: val })}
        />
        <Button
          disabled={!canSubmitForm()}
          clickHandler={submitHandler}
          label={isEditing ? "Update Item" : "Add Item"}
          icon={<TfiWrite className="w-4 h-4" />}
          btnClass={`flex items-center justify-center gap-2 w-full py-2.5 mt-4 rounded-lg font-medium text-white 
            transition-colors duration-200 ${
              isEditing
                ? "bg-amber-500 hover:bg-amber-600"
                : "bg-blue-600 hover:bg-blue-700"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
        />
      </form>
    </div>
  );
}
