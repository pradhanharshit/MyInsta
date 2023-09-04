import { useSelector } from "react-redux";
import "./HomeProfile.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const HomeProfile = () => {
  const { themeObject } = useTheme();
  const { ownerData } = useSelector((state) => state.users);
  // console.log(ownerData);
  return (
    <div
      className="homeprofile-container w-[20rem] h-[28rem] rounded-3xl"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <img
        className="homeprofile-cover-img h-[40%] w-[100%] rounded-t-3xl"
        src={ownerData?.coverPicture}
      />

      <img
        className="homeprofile-img rounded-full h-[80px] w-[80px]"
        src={ownerData?.profilePicture}
      />

      <div className="flex flex-col mt-9 text-center">
        <span className="text-xl" style={{ color: themeObject.text }}>
          {ownerData?.firstName} {ownerData?.lastName}
        </span>
        <span
          className="text-sm text-gray-700"
          style={{ color: themeObject.text }}
        >
          {ownerData?.username}
        </span>
      </div>

      <div
        className="homeprofile-bio pl-5 pr-5 mt-5 text-center text-gray-700"
        style={{ color: themeObject.text }}
      >
        {ownerData?.bio}
      </div>

      <div className="mt-8 flex justify-around pl-8 pr-8 text-base">
        <div className="followers flex space-x-1">
          <span style={{ color: themeObject.text }}>
            {ownerData?.followers?.length}
          </span>
          <span className="font-bold text-blue-400">Followers</span>
        </div>
        <div className="sp-ln"></div>
        <div className="following flex space-x-1">
          <span style={{ color: themeObject.text }}>
            {ownerData?.following?.length}
          </span>
          <span className="font-bold text-blue-400">Following</span>
        </div>
      </div>

      <div className="mt-5 mb-8 text-center text-lg font-semibold">
        <Link
          to={`/profile/${ownerData?.username}`}
          className="px-3 py-2 rounded-3xl bg-blue-400 text-white"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default HomeProfile;
