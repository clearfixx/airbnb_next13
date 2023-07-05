"use client";

import styles from "../../styles/components/Search.module.scss";

import { BiSearch } from "react-icons/bi"

const Searc = () => {
  return <div className={styles.search_box}>
    <div className={styles.search_box__inner}>
      <div className={styles.search_region}>Anywhere</div>
      <div className={styles.date}>Any week</div>
      <div className={styles.add_guests}>
        <div className={styles.add_guest__inner}>Add guests</div>
        <div className={styles.search_icon}>
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  </div>;
};

export default Searc;
