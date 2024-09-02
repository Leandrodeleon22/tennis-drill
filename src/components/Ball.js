import React from "react";

const Ball = ({ option, id }) => {
  console.log(option);
  return (
    <div
      className={`w-[7rem] h-[7rem] bg-[var(--main-color)] rounded-full ${
        option === id ? "bg-red-600" : ""
      }`}
    ></div>
  );
};

export default Ball;
