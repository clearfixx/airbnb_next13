"use client";

import styles from "@/app/styles/components/UserMenu.module.scss";
import RegionButton from "../regionButton/RegionButton";
import { AiOutlineMenu } from "react-icons/ai";
import ProfileIcon from "../profileIcon/ProfileIcon";
import { useCallback, useState } from "react";
import MenuItem from "../menuItem/MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className={styles.user_menu}>
      <div className={styles.user_menu__container}>
        <div className={styles.user_menu__rent_button}>Airbnb your home</div>
        <RegionButton />
        <div className={styles.user_menu__profile_button} onClick={toggleOpen}>
          <AiOutlineMenu />
          <div className={styles.profile_icon}>
            <ProfileIcon width={30} height={30} fill="#717171" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.profile_menu}>
          <div className={styles.profile_menu__wrapper}>
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign in" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
