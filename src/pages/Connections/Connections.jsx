import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Connections.css";

const Connections = () => {
  const { themeObject } = useTheme();
  return (
    <>
      <div className="text-center">
        <h1
          className="font-serif font-bold text-2xl m-8"
          style={{ color: themeObject.text }}
        >
          Connections
        </h1>
      </div>
      <div
        className="w-[80%] flex justify-around"
        style={{ color: themeObject.text }}
      >
        <NavLink to="followers" className="connection font-serif">
          Followers
        </NavLink>
        <NavLink to="following" className="connection font-serif">
          Following
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Connections;
