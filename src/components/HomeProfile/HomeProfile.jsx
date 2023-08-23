import "./HomeProfile.css"
import { Link } from "react-router-dom"

const HomeProfile = () => {
  return (
    <div className="homeprofile-container w-[21.5rem] h-[30rem] bg-gray-200 rounded-3xl">

    <img className="homeprofile-cover-img h-[40%] w-[100%] rounded-t-3xl" src="CoverImage.png" alt="" />

    <img className="homeprofile-img rounded-full h-[80px] w-[80px]" src="Profile.png" alt="" />

    <div className="flex flex-col mt-9 text-center">
    <span className="text-xl">Name</span>
    <span className="text-sm text-gray-700">UserName</span>
    </div>

    <div className="homeprofile-bio pl-5 pr-5 mt-5 text-center text-gray-700">Hy! This is Harshit Pradhan. Software Developer</div>

    <div className="mt-8 flex justify-around pl-8 pr-8 text-base">
        <div className="followers flex space-x-1">
            <span>0</span>
            <span className="font-bold text-blue-400">Followers</span>
        </div>
        <div className="sp-ln"></div>
        <div className="following flex space-x-1">
            <span>0</span>
            <span className="font-bold text-blue-400">Following</span>
        </div>
    </div>

    <div className="mt-5 mb-8 text-center text-lg font-semibold">
        <Link to="my-profile" className="px-3 py-2 rounded-3xl bg-blue-400 text-white">My Profile</Link>
    </div>

    </div>
  )
}

export default HomeProfile