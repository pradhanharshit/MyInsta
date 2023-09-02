import "./ProfilePosts.css";
import { useEffect, useState } from "react";
import { getAllPostsFromUsername } from "../../services/postService";
import { useSelector } from "react-redux";
import PostCard from "../PostCard/PostCard";

function ProfilePosts() {
  const { userData } = useSelector((state) => state.users);
  const { homeFeed } = useSelector((state) => state.posts);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getAllPostsFromUsername(userData?.username);
      setUserPosts(res.data.posts);
      // console.log(res);
    })();
  }, [userData, homeFeed]);
  console.log(userPosts);
  return (
    <>
      {userPosts.map((userpost) => {
        return <PostCard postData={userpost} key={userpost._id} />;
      })}
    </>
  );
}

export default ProfilePosts;
