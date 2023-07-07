"use client";

// Styles
import styles from "@/app/styles/components/UserMenu.module.scss";

// Libs
import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";

// Hooks
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

// Interfaces
import { INavbraProps } from "@/app/interfaces/navbarProps";

// Components
import { AiOutlineMenu } from "react-icons/ai";
import RegionButton from "../regionButton/RegionButton";
import ProfileIcon from "../profileIcon/ProfileIcon";
import MenuItem from "../menuItem/MenuItem";
import Image from "next/image";

const UserMenu: React.FC<INavbraProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const userName = currentUser?.name;

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
            {currentUser ? (
              <>
                {currentUser.image ? (
                  <Image
                    src={`${currentUser.image}`}
                    alt={`${currentUser.name}'s avatar`}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-[30px] h-[30px] rounded-full bg-slate-600 text-white flex justify-center items-center font-normal text-xs">
                    {userName?.charAt(0).toUpperCase()}
                  </div>
                )}
              </>
            ) : (
              <ProfileIcon width={30} height={30} fill="#717171" />
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.profile_menu}>
          <div className={styles.profile_menu__wrapper}>
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="Profile" />
                <MenuItem onClick={() => {}} label="My trips" />
                <MenuItem onClick={() => {}} label="My favorites" />
                <MenuItem onClick={() => {}} label="My reservations" />
                <MenuItem onClick={() => {}} label="My properties" />
                <MenuItem onClick={() => {}} label="Airbnb my homy" />
                <div className="w-full h-[1px] my-1 bg-slate-100"></div>
                <MenuItem
                  onClick={() => {
                    toast.success("See you next time!", {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                    setTimeout(() => signOut(), 1000);
                  }}
                  label="Logout"
                />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
