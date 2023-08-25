import {
  BookmarkIcon,
  UsersIcon,
  MoonIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import "./SideBar.css";
import { useTheme } from "../../context/ThemeContext";

const SideBar = () => {
  const { theme, themeObject, toggleThemeHandler } = useTheme();
  const dispatch = useDispatch();
  return (
    <div
      className="side-comp flex flex-col"
      style={{ backgroundColor: themeObject.primary, color: themeObject.text }}
    >
      <h1
        className="font-bold font-serif text-3xl mt-10 mb-10"
        style={{ color: themeObject.text }}
      >
        Instagram
      </h1>

      <NavLink to="/" className="flex space-x-3 items-center mb-10">
        <HomeIcon
          className="heroicon-outline h-[30px] w-[30px] fill-none"
          style={{ stroke: themeObject.text }}
        ></HomeIcon>
        <p className="text-xl page-title">Home</p>
      </NavLink>

      <NavLink to="/bookmarks" className="flex space-x-3 items-center mb-10">
        <BookmarkIcon className="heroicon-outline h-[30px] w-[30px]"></BookmarkIcon>
        <p className="text-xl">Bookmarks</p>
      </NavLink>

      <NavLink
        to="/connect-people"
        className="flex space-x-3 items-center mb-10"
      >
        <UsersIcon className="heroicon-outline h-[30px] w-[30px]"></UsersIcon>
        <p className="ressp text-xl">Find People</p>
      </NavLink>

      <NavLink to="my-profile" className="flex space-x-3 items-center mb-10">
        <UserIcon className="heroicon-outline h-[30px] w-[30px]"></UserIcon>
        <p className="ressp text-xl">Profile</p>
      </NavLink>

      <div
        className="flex space-x-3 items-center mb-10 p-2 rounded-2xl"
        style={{ backgroundColor: themeObject.secondary }}
        onClick={() => {
          if (theme === "light") {
            toggleThemeHandler("dark");
          } else toggleThemeHandler("light");
        }}
      >
        {theme === "light" ? (
          <MoonIcon className="h-[35px] w-[35px]" />
        ) : (
          <SunIcon className="h-[35px] w-[35px]" />
        )}
      </div>
      <div
        className="flex space-x-3 items-center mb-10 p-2 rounded-2xl"
        style={{ backgroundColor: themeObject.secondary }}
        onClick={() => dispatch(logout())}
      >
        <ArrowRightOnRectangleIcon className="h-[35px] w-[35px]"></ArrowRightOnRectangleIcon>
      </div>
    </div>
  );
};

export default SideBar;
