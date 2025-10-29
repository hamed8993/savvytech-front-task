import { useState } from "react";
import type { FormObjectType } from "../types/form-object.type";

export const useForm = () => {
  const [fields, setFields] = useState<FormObjectType>({
    subtitle: "",
    title: "",
  });



  return {fields, setFields};
};
