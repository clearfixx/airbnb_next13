"use client";

import styles from "@/app/styles/components/navbar/Navbar.module.scss";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import UserMenu from "../userMenu/UserMenu";
import { INavbraProps } from "@/app/interfaces/navbarProps";

const Navbar: React.FC<INavbraProps> = ({ currentUser }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__inner}>
        <Container>
          <div className={styles.container_child}>
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
