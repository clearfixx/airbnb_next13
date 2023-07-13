import {
  FieldErrors,
  FieldValue,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

export interface IInputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
