import React from "react";

const ShortnessNum = ({ num }) => {
  return (
    <div>
      {Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
      }).format(num)}
    </div>
  );
};

export default ShortnessNum;
