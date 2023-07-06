"use client";

// Libs
import { useCallback, useState } from "react";

// Interfaces
import { IInputProps } from "@/app/interfaces/inputsProps";

// Styles
import styles from "@/app/styles/components/Inputs.module.scss";

// Components
import { BiDollar } from "react-icons/bi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { error } from "console";

const Inputs: React.FC<IInputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const isVisibleHandler = useCallback(() => {
    setIsVisible((isVisible) => !isVisible);
  }, [isVisible]);

  return (
    <div className={styles.inputs}>
      {formatPrice && (
        <BiDollar size={24} className={styles.inputs__dollarIcon} />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type === 'password' && !isVisible ? 'password' : 'text'}
        className={`
          peer  
          ${styles.input} 
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
      {type === "password" ? (
        <div className={styles.set_visible} onClick={isVisibleHandler}>
          {isVisible ? <AiOutlineEyeInvisible className="text-black" size={24} /> : <AiOutlineEye size={24} />}
        </div>
      ) : (
        ""
      )}
      <label
        htmlFor={id}
        className={`
        absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0]
        ${formatPrice ? "left-9" : "left-4"}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
      >
       {errors[id] ? `${label} must be non empty`: label}
      </label>
    </div>
  );
};

export default Inputs;
