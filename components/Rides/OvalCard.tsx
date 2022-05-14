import React from "react";

const OvalCard = ({ label }: { label: string }) => {
  return (
    <div className="px-4 py-1 text-lg bg-jetBlack rounded-2xl hover:bg-midGray">
      {label}
    </div>
  );
};

export default OvalCard;
