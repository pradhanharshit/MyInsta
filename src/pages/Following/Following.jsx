import { useSelector } from "react-redux";
import ConnectUserCard from "../../components/ConnectUserCard/ConnectUserCard";

const Following = () => {
  const { userData } = useSelector((state) => state.users);
  return (
    <>
      {userData?.following?.map((following) => {
        return <ConnectUserCard key={following?._id} userdata={following} />;
      })}
    </>
  );
};

export default Following;
