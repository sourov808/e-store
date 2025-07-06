import { createContext, type ReactNode } from "react";

interface FilterContextType {
  search: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  setSearch: (val: string) => void;
  setCategory: (val: string) => void;
  setMinPrice: (val: number) => void;
  setMaxPrice: (val: number) => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

import { useState } from "react";

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  return (
    <FilterContext.Provider
      value={{
        category,
        maxPrice,
        minPrice,
        search,
        setCategory,
        setMaxPrice,
        setMinPrice,
        setSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
