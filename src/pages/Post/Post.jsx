import { useSelector } from "react-redux";
import { useParams } from "react-router";
import PostCard from "../../components/PostCard/PostCard";

const Post = () => {
  const param = useParams();
  const { homeFeedPosts } = useSelector((state) => state.posts);
  const postData = homeFeedPosts?.filter((post) => post._id === param.postId);
  return (
    <>
      <PostCard postData={postData} />
    </>
  );
};

export default Post;
