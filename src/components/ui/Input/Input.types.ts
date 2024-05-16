import { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps<T extends FieldValues> {
  id?: string;
  className?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  register: UseFormRegister<T>;
}
