import {
  BookmarkIcon,
  UsersIcon,
  MoonIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  SunIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import "./SideBar.css";
import { useTheme } from "../../context/ThemeContext";
import { changeCurrentId } from "../../store/userSlice";

const SideBar = () => {
  const { theme, themeObject, toggleThemeHandler } = useTheme();
  const { user } = useSelector((state) => state.auth);
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

      <NavLink to="/explore" className="flex space-x-3 items-center mb-10">
        <BoltIcon
          className="heroicon-outline h-[30px] w-[30px]"
          style={{ stroke: themeObject.text }}
        ></BoltIcon>
        <p className="text-xl page-title">Explore</p>
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

      <NavLink
        to={`/${user.username}`}
        onClick={() => {
          dispatch(changeCurrentId(user._id));
        }}
        className="flex space-x-3 items-center mb-10"
      >
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
