import {
  HomeIcon,
  BookmarkIcon,
  UsersIcon,
  MoonIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  SunIcon,
} from "@heroicons/react/20/solid";
import "./BottomBar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../context/ThemeContext";
import { logout } from "../../store/authSlice";

const BottomBar = () => {
  const { user } = useSelector((state) => state.auth);
  const { themeObject, theme, toggleThemeHandler } = useTheme();
  const dispatch = useDispatch();
  return (
    <div
      className="bottombar"
      style={{ color: themeObject.text, backgroundColor: themeObject.primary }}
    >
      <NavLink to="/">
        <HomeIcon className="h-[30px] w-[30px]" />
      </NavLink>
      <NavLink to="bookmarks">
        <BookmarkIcon className="h-[30px] w-[30px]" />
      </NavLink>
      <NavLink to="connect-people">
        <UsersIcon className="h-[30px] w-[30px]" />
      </NavLink>
      <NavLink to={`/${user?.username}`}>
        <UserIcon className="h-[30px] w-[30px]" />
      </NavLink>
      <div
        className="flex space-x-3 items-center rounded-2xl"
        onClick={() => {
          if (theme === "light") {
            toggleThemeHandler("dark");
          } else toggleThemeHandler("light");
        }}
      >
        {theme === "light" ? (
          <MoonIcon className="h-[30px] w-[30px]" />
        ) : (
          <SunIcon className="h-[30px] w-[30px]" />
        )}
      </div>
      <div
        className="flex space-x-3 items-center rounded-2xl"
        onClick={() => dispatch(logout())}
      >
        <ArrowRightOnRectangleIcon className="h-[35px] w-[35px]"></ArrowRightOnRectangleIcon>
      </div>
    </div>
  );
};

export default BottomBar;
