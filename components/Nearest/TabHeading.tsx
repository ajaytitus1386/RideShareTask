import React from "react";

function TabHeading({
  isSelected,
  setIsSelected,
  tabFunction,
  label,
  id,
}: {
  isSelected: boolean;
  setIsSelected: Function;
  tabFunction: Function;
  label: String;
  id: number;
}) {
  const selectedClassStyle =
    "font-semibold border-b-2 border-solid border-primary text-primary";
  const unSelectedClassStyle = "text-lightGray hover:text-primary";
  return (
    <li
      className={isSelected ? selectedClassStyle : unSelectedClassStyle}
      onClick={() => {
        setIsSelected(id);
        tabFunction();
      }}
    >
      {label}
    </li>
  );
}

export default TabHeading;
