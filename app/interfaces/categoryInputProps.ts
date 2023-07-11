import { IconType } from "react-icons";

export interface ICategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}
