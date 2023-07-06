import { FieldErrors, FieldValue, UseFormRegister } from "react-hook-form";

export interface IInputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValue>;
  errors: FieldErrors;
}
