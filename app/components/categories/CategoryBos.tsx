"use client";

// Styles
import styles from "@/app/styles/components/Categories.module.scss";

// Libs
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);

  return (
    <div
      className={`
        ${styles.category__box} 
        ${selected ? "border-b-neutral-800" : "border-transparent"} 
        ${selected ? "text-neutral-800" : "text-neutral-500"}`}
      onClick={handleClick}
    >
      <Icon size={26} />
      <div className={styles.category__box_label}>{label}</div>
    </div>
  );
};

export default CategoryBox;
