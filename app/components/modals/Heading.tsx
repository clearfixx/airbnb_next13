"use client";

// Interfaces
import { IHeadingProps } from "@/app/interfaces/headingProps";

// Styles
import styles from "@/app/styles/components/Heading.module.scss";

const Heading: React.FC<IHeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className={styles.heading__title}>{title}</div>
      <div className={styles.heading__subtitle}>{subtitle}</div>
    </div>
  );
};

export default Heading;
