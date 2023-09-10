import { Link, Outlet } from "react-router-dom";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";
import EditUserModal from "../../components/EditUserModal/EditUserModal";
import { followUser, unfollowUser } from "../../services/followUnfollowService";
import { toast } from "react-toastify";
import { getOwnerData, getUserData } from "../../services/userService";

const Profile = () => {
  const { themeObject } = useTheme();
  const { userData, ownerData } = useSelector((state) => state.users);
  const { authToken, user } = useSelector((state) => state.auth);
  const { currentId } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [openUserEdit, setOpenUserEdit] = useState(false);

  return (
    <>
      <div
        className="myprofile-container rounded-3xl w-[100%]"
        style={{ backgroundColor: themeObject.secondary }}
      >
        <img
          className="h-[40%] w-[100%] rounded-t-3xl"
          src={userData?.coverPicture}
          alt=""
        />

        <img
          className="myprofile-img rounded-full"
          src={userData?.profilePicture}
          alt=""
        />

        <div
          className="user-title flex flex-col text-center"
          style={{ color: themeObject.text }}
        >
          <div className="space-x-8">
            <span className="text-3xl">
              {userData?.firstName} {userData?.lastName}
            </span>
            {ownerData?._id === userData?._id ? (
              <button
                className="px-3 py-1 rounded-2xl border-2 border-blue-400"
                style={{ color: "rgb(96 165 250)" }}
                onClick={() => {
                  setOpenUserEdit(!openUserEdit);
                }}
              >
                Edit User
              </button>
            ) : ownerData?.following?.some(
                (user) => user._id === userData?._id
              ) ? (
              <button
                className="px-3 py-1 rounded-2xl border-2 border-blue-400"
                style={{ color: "rgb(96 165 250)" }}
                onClick={() => {
                  unfollowUser(userData?._id, authToken);
                  dispatch(getOwnerData(user._id));
                  dispatch(getUserData(currentId));
                  toast.success("User unfollowed!!");
                }}
              >
                following
              </button>
            ) : (
              <button
                className="px-3 py-1 rounded-2xl border-2 border-blue-400"
                style={{ color: "rgb(96 165 250)" }}
                onClick={() => {
                  followUser(userData?._id, authToken);

                  dispatch(getOwnerData(user._id));
                  dispatch(getUserData(currentId));
                  toast.success("User followed!!");
                }}
              >
                follow
              </button>
            )}
          </div>
          <span
            className="text-sm text-gray-700"
            style={{ color: themeObject.text }}
          >
            {userData?.username}
          </span>
        </div>

        <div
          className="homeprofile-bio pl-5 pr-5 mt-5 text-center text-gray-700"
          style={{ color: themeObject.text }}
        >
          {userData?.bio}
        </div>

        {openUserEdit && <EditUserModal setOpenUserEdit={setOpenUserEdit} />}

        <div className="mt-8 flex justify-around pl-8 pr-8 text-base">
          <div className="followers flex space-x-1">
            <span style={{ color: themeObject.text }}>
              {userData?.followers?.length}
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
              {userData?.following?.length}
            </span>
            <Link
              to="/connections/following"
              className="font-bold text-blue-400"
            >
              Following
            </Link>
          </div>
        </div>
        <div className="mt-8 buttons flex justify-around">
          <div className="text-center text-lg font-semibold">
            <Link
              to={`/${userData?.username}`}
              className="px-3 py-2 rounded-3xl bg-blue-400 text-white"
            >
              Posts
            </Link>
          </div>
          <div className="text-center text-lg font-semibold">
            <Link
              to={`media`}
              className="px-3 py-2 rounded-3xl bg-blue-400 text-white"
            >
              Media
            </Link>
          </div>
          <div className="text-center text-lg font-semibold">
            <Link
              to="likes"
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
