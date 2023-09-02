import { Link, Outlet } from "react-router-dom";
import "./Profile.css";
import { useSelector } from "react-redux";
import { useTheme } from "../../context/ThemeContext";

const Profile = () => {
  const { themeObject } = useTheme();
  const { userData } = useSelector((state) => state.users);

  return (
    <>
      <div
        className="myprofile-container rounded-3xl w-[100%]"
        style={{ backgroundColor: themeObject.secondary }}
      >
        <img
          className="h-[40%] w-[100%] rounded-t-3xl"
          src={userData.coverPicture}
          alt=""
        />

        <img
          className="myprofile-img rounded-full"
          src={userData.profilePicture}
          alt=""
        />

        <div
          className="user-title flex flex-col text-center"
          style={{ color: themeObject.text }}
        >
          <span className="text-3xl">
            {userData.firstName} {userData.lastName}
          </span>
          <span
            className="text-sm text-gray-700"
            style={{ color: themeObject.text }}
          >
            {userData.username}
          </span>
        </div>

        <div
          className="homeprofile-bio pl-5 pr-5 mt-5 text-center text-gray-700"
          style={{ color: themeObject.text }}
        >
          {userData.bio}
        </div>

        <div className="mt-8 flex justify-around pl-8 pr-8 text-base">
          <div className="followers flex space-x-1">
            <span style={{ color: themeObject.text }}>
              {userData.followers.length}
            </span>
            <Link
              to="/connections/followers"
              className="font-bold text-blue-400"
            >
              Followers
            </Link>
          </div>
          <div className="sp-ln"></div>
          <div className="following flex space-x-1">
            <span style={{ color: themeObject.text }}>
              {userData.following.length}
            </span>
            <Link
              to="/connections/following"
              className="font-bold text-blue-400"
            >
              Following
            </Link>
          </div>
        </div>
        <div className="mt-4 buttons flex justify-around">
          <div className="mt-5 mb-8 text-center text-lg font-semibold">
            <Link
              to="/my-profile/posts"
              className="px-3 py-2 rounded-3xl bg-blue-400 text-white"
            >
              Posts
            </Link>
          </div>
          <div className="mt-5 mb-8 text-center text-lg font-semibold">
            <Link
              to="my-profile/Media"
              className="px-3 py-2 rounded-3xl bg-blue-400 text-white"
            >
              Media
            </Link>
          </div>
          <div className="mt-5 mb-8 text-center text-lg font-semibold">
            <Link
              to="my-profile/Liked"
              className="px-3 py-2 rounded-3xl bg-blue-400 text-white"
            >
              Liked
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Profile;
