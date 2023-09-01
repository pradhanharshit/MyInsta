import { Link } from "react-router-dom";
import "./ProfilePosts.css";

function ProfilePosts() {
  return (
    <div className="myprofile-container bg-gray-200 rounded-3xl">
      <img
        className="h-[40%] w-[100%] rounded-t-3xl"
        src="CoverImage.png"
        alt=""
      />

      <img className="myprofile-img rounded-full" src="Profile.png" alt="" />

      <div className="user-title flex flex-col text-center">
        <span className="text-3xl">Name</span>
        <span className="text-sm text-gray-700">UserName</span>
      </div>

      <div className="homeprofile-bio pl-5 pr-5 mt-5 text-center text-gray-700">
        Hy! This is Harshit Pradhan. Software Developer
      </div>

      <div className="mt-8 flex justify-around pl-8 pr-8 text-base">
        <div className="followers flex space-x-1">
          <span>0</span>
          <Link to="followers" className="font-bold text-blue-400">
            Followers
          </Link>
        </div>
        <div className="sp-ln"></div>
        <div className="following flex space-x-1">
          <span>0</span>
          <Link to="following" className="font-bold text-blue-400">
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
  );
}

export default ProfilePosts;
