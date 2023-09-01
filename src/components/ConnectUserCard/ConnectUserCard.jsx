/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import { useTheme } from "../../context/ThemeContext";

const ConnectUserCard = ({ userdata }) => {
  const { themeObject } = useTheme();
  return (
    <>
      <Card>
        <div className="flex justify-between items-center">
          <img
            className="rounded-full h-[50px] w-[50px]"
            src={userdata.profilePicture}
          />
          <div className="text-center">
            <p className="text-lg" style={{ color: themeObject.text }}>
              {userdata.firstName} {userdata.lastName}
            </p>
            <p
              className="text-sm text-gray-700"
              style={{ color: themeObject.text }}
            >
              {userdata.username}
            </p>
          </div>
          <div className="text-lg font-semibold">
            <button
              to="my-profile/Liked"
              className="px-3 py-2 rounded-3xl bg-blue-400 text-white"
            >
              follow
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ConnectUserCard;
