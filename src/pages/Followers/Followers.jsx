import { useSelector } from "react-redux";
import ConnectUserCard from "../../components/ConnectUserCard/ConnectUserCard";

const Followers = () => {
  const { userData } = useSelector((state) => state.users);
  return (
    <>
      {userData?.followers?.map((follower) => {
        return <ConnectUserCard key={follower?._id} userdata={follower} />;
      })}
    </>
  );
};

export default Followers;
