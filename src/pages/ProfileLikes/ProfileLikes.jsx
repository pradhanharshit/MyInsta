import { useSelector } from "react-redux";
import PostCard from "../../components/PostCard/PostCard";

const ProfileLikes = () => {
  const { homeFeedPosts } = useSelector((state) => state.posts);
  const { userData } = useSelector((state) => state.users);
  return (
    <>
      {homeFeedPosts
        ?.filter((post) => {
          return post?.likes?.likedBy?.some(
            (likedBy) => likedBy.username === userData?.username
          );
        })
        .map((post) => {
          return <PostCard key={post?._id} postData={post} />;
        })}
    </>
  );
};

export default ProfileLikes;
