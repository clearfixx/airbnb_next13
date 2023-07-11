"use client";

// Styles
import styles from "@/app/styles/components/Categories.module.scss";

// Category data
import { categories } from "@/app/data/categoryData";

// Components
import Container from "../container/Container";
import CategoryBox from "./CategoryBos";
import { usePathname, useSearchParams } from "next/navigation";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();
  const isMainPage = pathName === "/";
  return (
    <Container>
      <div className={styles.categories}>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
