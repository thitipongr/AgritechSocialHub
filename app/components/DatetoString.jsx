import React from "react";

const DatetoString = ({ date }) => {
  return (
    <div>
      {new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </div>
  );
};

export default DatetoString;
