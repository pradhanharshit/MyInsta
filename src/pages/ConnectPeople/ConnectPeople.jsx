import { useSelector } from "react-redux";
import ConnectUserCard from "../../components/ConnectUserCard/ConnectUserCard";
import { useTheme } from "../../context/ThemeContext";

const ConnectPeople = () => {
  const { themeObject } = useTheme();
  const { allUsers, ownerData } = useSelector((store) => store.users);
  return (
    <>
      <div className="text-center">
        <h1
          className="font-serif font-bold text-2xl m-8"
          style={{ color: themeObject.text }}
        >
          Connect
        </h1>
      </div>

      {allUsers
        ?.filter(
          (userdata) =>
            userdata?._id !== ownerData?._id &&
            ownerData?.following?.some(
              (followingUser) => followingUser?._id === userdata?._id
            ) === false
        )
        .map((userdata) => {
          return <ConnectUserCard userdata={userdata} key={userdata.id} />;
        })}
    </>
  );
};

export default ConnectPeople;
