import React from "react";

const FiltersDropdown = ({
  children,
  clearFilters,
}: {
  children: React.ReactNode;
  clearFilters: Function;
}) => {
  return (
    <div className="absolute z-50 flex flex-col w-64 p-8 space-y-4 overflow-hidden rounded-lg right-4 top-10 bg-jetBlack">
      <div className="flex flex-row justify-between">
        <h2 className="ml-2 text-xl opacity-75 text-lightGray">Filters</h2>
        <i
          onClick={() => clearFilters()}
          className="p-1 rounded-lg material-icons text-primary hover:bg-midGray"
        >
          {"close"}
        </i>
      </div>
      <div className="w-full h-px mb-4 bg-lightGray"></div>
      {children}
    </div>
  );
};

export default FiltersDropdown;
