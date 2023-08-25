/* eslint-disable react/prop-types */

import { useTheme } from "../../context/ThemeContext";

const Card = ({ children }) => {
  const { themeObject } = useTheme();
  return (
    <div
      className="card bg-gray-200 shadow-xl rounded-3xl p-4 w-[90%] my-4 m-auto"
      style={{ backgroundColor: themeObject.secondary }}
    >
      {children}
    </div>
  );
};

export default Card;
