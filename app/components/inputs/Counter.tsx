"use client";

// Libs
import { useCallback } from "react";

// Styles
import styles from "@/app/styles/components/Counter.module.scss";

// Interfaces
import { ICounterProps } from "@/app/interfaces/counterProps";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Counter: React.FC<ICounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) return;

    onChange(value - 1);
  }, [value, onChange]);

  return (
    <div className={styles._box}>
      <div className={styles._heading}>
        <div className={styles._title}>{title}</div>
        <div className={styles._subtitle}>{subtitle}</div>
      </div>
      <div className={styles._buttons}>
        <div
          onClick={onReduce}
          className={`
            w-10 h-10 rounded-full border-[1px] flex items-center cursor-pointer justify-center hover:opacity-80 transition
            ${
              value === 1
                ? "border-neutral-200 text-neutral-200"
                : "border-neutral-600 text-neutral-800"
            }
          `}
        >
          <AiOutlineMinus />
        </div>
        <div className={styles._value}>{value}</div>
        <div onClick={onAdd} className={styles._button}>
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Counter;
