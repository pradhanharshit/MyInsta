import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllPostsFromUsername } from "../../services/postService";
import PostCard from "../PostCard/PostCard";

const ProfilePosts = () => {
  const { userData } = useSelector((store) => store.users);
  const { homeFeedPosts } = useSelector((store) => store.posts);
  const [userPosts, setUserPosts] = useState([]);

  const getUserPosts = async () => {
    const res = await getAllPostsFromUsername(userData?.username);
    setUserPosts(res);
  };

  useEffect(() => {
    getUserPosts();
  }, [userData, homeFeedPosts]);

  return userPosts?.map((post) => {
    return <PostCard key={post._id} postData={post} />;
  });
};

export default ProfilePosts;
