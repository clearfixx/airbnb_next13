"use client";

import { IMenuItemProps } from "@/app/interfaces/menuItemProps";
import styles from "@/app/styles/components/MenuItem.module.scss";

const MenuItem: React.FC<IMenuItemProps> = ({ onClick, label }) => {
  return <div className={styles.menu_item} onClick={onClick}>{label}</div>;
};

export default MenuItem;
