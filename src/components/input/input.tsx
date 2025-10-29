import {
  useState,
  type ChangeEvent,
  type ReactElement,
  useEffect,
} from "react";

type InputPropsType = {
  label: string;
  placeHolder: string;
  name: string;
  initialValue?: string;
  onValueChange?: (value: string) => void;
};

export function Input({
  label,
  placeHolder,
  name,
  initialValue = "",
  onValueChange,
}: InputPropsType): ReactElement {
  const [val, setVal] = useState(initialValue);

  useEffect(() => {
    setVal(initialValue);
  }, [initialValue]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setVal(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="title"
        className="text-sm font-medium text-gray-700 flex items-center gap-1"
      >
        {label}
        <span className="text-red-500">*</span>
      </label>
      <input
        name={name}
        onChange={handleInput}
        value={val}
        placeholder={placeHolder}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
      />
      {!val && (
        <span className="ml-1 text-xs text-red-500 text-left">
          {label} is required
        </span>
      )}
    </div>
  );
}
