"use client";

import styles from "../../styles/components/container/Container.module.scss";

import { IContainerProps } from "@/app/interfaces/containerProps";

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
