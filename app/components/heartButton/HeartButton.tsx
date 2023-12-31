"use client";

// Libs
import React, { FC } from "react";

// Interfaces
import { IHeartButtonProps } from "@/app/interfaces/heartButtonProps";

// Styles
import styles from "@/app/styles/components/HeartButton.module.scss";

// Icons
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HeartButton: FC<IHeartButtonProps> = ({ listingId, currentUser }) => {
  const hasFavorited = false;
  const toggleFavorite = () => {};

  return (
    <div 
    onClick={toggleFavorite}
    className="
      relative
      hover:opacity-80
      transition
      cursor-pointer
    "
  >
    <AiOutlineHeart
      size={28}
      className="
        fill-white
        absolute
        -top-[2px]
        -right-[2px]
      "
    />
    <AiFillHeart
      size={24}
      className={
        hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'
      }
    />
  </div>
  );
};

export default HeartButton;
