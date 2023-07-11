"use client";

// Libs
import Select from "react-select";

// Hooks
import useCountries from "@/app/hooks/useCountries";

// Styles
import styles from "@/app/styles/components/CountrySelect.module.scss";

// Interfaces
import { ICountrySelectProps } from "@/app/interfaces/countriesSelectProps";
import { CountrySelectValue } from "@/app/types";

const CountrySelect: React.FC<ICountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className={styles.__option}>
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className={styles.__region}>{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
