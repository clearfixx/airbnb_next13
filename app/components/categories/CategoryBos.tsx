"use client";

import { IconType } from "react-icons";

import styles from "@/app/styles/components/Categories.module.scss";

interface ICategoryBoxProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryBox: React.FC<ICategoryBoxProps> = ({
  label,
  icon: Icon,
  selected,
}) => {
  return (
    <div
      className={`
        ${styles.category__box} 
        ${selected ? "border-b-neutral-800" : "border-transparent"} 
        ${selected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      <Icon size={26} />
      <div className={styles.category__box_label}>{label}</div>
    </div>
  );
};

export default CategoryBox;
