/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentId } from "../../store/userSlice";
import { followUser, unfollowUser } from "../../services/followUnfollowService";
import { getOwnerData, getUserData } from "../../services/userService";

const ConnectUserCard = ({ userdata }) => {
  const { themeObject } = useTheme();
  const { authToken, user } = useSelector((state) => state.auth);
  const { ownerData } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <div className="flex justify-between items-center">
          <Link to={`/${userdata?.username}`}>
            <img
              className="rounded-full h-[50px] w-[50px]"
              src={userdata.profilePicture}
              onClick={() => {
                dispatch(changeCurrentId(userdata?._id));
              }}
            />
          </Link>
          <div className="text-center">
            <p className="text-lg" style={{ color: themeObject.text }}>
              {userdata?.firstName} {userdata?.lastName}
            </p>
            <Link
              to={`/${userdata?.username}`}
              onClick={() => {
                dispatch(changeCurrentId(userdata?._id));
              }}
            >
              <p
                className="text-sm text-gray-700 underline underline-offset-2"
                style={{ color: themeObject.text }}
              >
                {userdata?.username}
              </p>
            </Link>
          </div>
          <div className="text-lg font-semibold">
            <button
              to="my-profile/Liked"
              className="px-3 py-2 rounded-3xl bg-blue-400 text-white"
              onClick={() => {
                {
                  ownerData.following.some(
                    (user) => user.usename === userdata.username
                  )
                    ? unfollowUser(userdata?._id, authToken)
                    : followUser(userdata?._id, authToken);
                }
                dispatch(getOwnerData(user._id));
                dispatch(getUserData(user?._id));
              }}
            >
              {ownerData.following.some(
                (user) => user.usename === userdata.username
              )
                ? "following"
                : "follow"}
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ConnectUserCard;
