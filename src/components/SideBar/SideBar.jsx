import { BookmarkIcon, UsersIcon, MoonIcon, ArrowRightOnRectangleIcon, UserIcon} from "@heroicons/react/24/outline"
import { HomeIcon } from "@heroicons/react/20/solid"
import { NavLink } from "react-router-dom"
import "./SideBar.css"

const SideBar = () => {
  return (
    <div className="side-comp flex flex-col">
        <h1 className="font-bold font-serif text-3xl mt-10 mb-10">Instagram</h1>
        
        <NavLink to="/" className="flex space-x-3 items-center mb-10">
        <HomeIcon className="heroicon-outline h-[30px] w-[30px] fill-none stroke-black"></HomeIcon>
        <p className="text-xl">Home</p>
        </NavLink>

        <NavLink to="/bookmarks" className="flex space-x-3 items-center mb-10">
        <BookmarkIcon className="heroicon-outline h-[30px] w-[30px]"></BookmarkIcon>
        <p className="text-xl">Bookmarks</p>
        </NavLink>

        <NavLink to="/connect-people" className="flex space-x-3 items-center mb-10">
        <UsersIcon className="heroicon-outline h-[30px] w-[30px]"></UsersIcon>
        <p className="ressp text-xl">Find People</p>
        </NavLink>

        <NavLink to="my-profile" className="flex space-x-3 items-center mb-10">
        <UserIcon className="heroicon-outline h-[30px] w-[30px]"></UserIcon>
        <p className="ressp text-xl">Profile</p>
        </NavLink>

        <div className="flex space-x-3 items-center mb-10">
        <MoonIcon className="h-[40px] w-[40px]"></MoonIcon>
        </div>
        <div className="flex space-x-3 items-center mb-10">
        <ArrowRightOnRectangleIcon className="h-[40px] w-[40px]"></ArrowRightOnRectangleIcon>
        </div>
    </div>
  )
}

export default SideBar