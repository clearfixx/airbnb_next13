"use client";

// Interfaces
import { ICategoryInputProps } from "@/app/interfaces/categoryInputProps";

// Styles
import styles from "@/app/styles/components/CategoryInput.module.scss";

const CategoryInput: React.FC<ICategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`${styles.__item} ${
        selected ? "border-black" : "border-neutral-200"
      }`}
      onClick={() => onClick(label)}
    >
      <Icon size={30} />
      <div className={styles.__label}>{label}</div>
    </div>
  );
};

export default CategoryInput;
