import { Outlet } from "react-router-dom"
import "./MyProfile.css"

const MyProfile = () => {
  return (
    <>
      <h1 className="my-profile font-serif font-bold text-2xl mt-8">My Profile</h1>
      <Outlet />
    </>
  )
}

export default MyProfile