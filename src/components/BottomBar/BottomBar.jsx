import {HomeIcon, BookmarkIcon, UsersIcon, MoonIcon, ArrowRightOnRectangleIcon, UserIcon} from "@heroicons/react/20/solid"
import "./BottomBar.css";
import { NavLink } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="bottombar">
        <NavLink to="/">
        <HomeIcon className="h-[30px] w-[30px]"></HomeIcon>
        </NavLink>
        <NavLink to="bookmarks">
        <BookmarkIcon className="h-[30px] w-[30px]"></BookmarkIcon>
        </NavLink>
        <NavLink to="connect-people">
        <UsersIcon className="h-[30px] w-[30px]"></UsersIcon>
        </NavLink>
        <NavLink to="my-profile">
        <UserIcon className="h-[30px] w-[30px]"></UserIcon>
        </NavLink>
        <MoonIcon className="h-[30px] w-[30px]"></MoonIcon>
        <ArrowRightOnRectangleIcon className="h-[30px] w-[30px]"></ArrowRightOnRectangleIcon>
    </div>
  )
}

export default BottomBar