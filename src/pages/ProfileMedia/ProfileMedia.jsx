import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllPostsFromUsername } from "../../services/postService";
import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

const ProfileMedia = () => {
  const themeObject = useTheme();
  const { userData } = useSelector((store) => store.users);
  const [userPosts, setUserPosts] = useState([]);

  const getUserPosts = async () => {
    const res = await getAllPostsFromUsername(userData?.username);
    setUserPosts(res);
  };

  useEffect(() => {
    getUserPosts();
  }, [userData]);
  return (
    <div
      className="flex flex-col rounded-3xl"
      style={{ backgroundColor: themeObject.secondary }}
    >
      {userPosts?.map((post) => {
        return (
          <img className="m-4 rounded-3xl" src={post.media} key={post._id} />
        );
      })}
    </div>
  );
};

export default ProfileMedia;
