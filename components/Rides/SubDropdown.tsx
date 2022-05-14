import React, { useState } from "react";

const DropdownOption = ({
  option,
  setFilter,
}: {
  option: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      onClick={() => {
        setFilter(option);
      }}
      className="px-4 py-2 text-xl opacity-75 text-primary hover:opacity-100"
    >
      {option}
    </div>
  );
};

const SubDropdown = ({
  label,
  filter,
  options,
  setFilter,
}: {
  label: string;
  filter: string;
  options: string[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [showOptions, setShowOptions] = useState(false);

  function toggleOptions() {
    setShowOptions(!showOptions);
  }
  return (
    <div className="overflow-scroll rounded-lg bg-midGray max-h-48 no-scrollbar">
      <div
        onClick={toggleOptions}
        className="flex flex-row items-center justify-between px-4 py-2 "
      >
        <label className="text-xl text-primary">
          {filter == "" ? label : filter}
        </label>
        <i className="material-icons text-lightGray">
          {showOptions ? "arrow_drop_up" : "arrow_drop_down"}
        </i>
      </div>
      <div className="w-full h-px bg-white"></div>
      <div className="">
        {showOptions &&
          options.map((option) => {
            return (
              <DropdownOption
                key={option}
                setFilter={setFilter}
                option={option}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SubDropdown;
