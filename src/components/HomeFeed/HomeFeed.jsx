import PostCard from "../../components/PostCard/PostCard";
import Filter from "../../components/Filter/Filter";
import NewPostCard from "../NewPostCard/NewPostCard";
import { useSelector } from "react-redux";

const HomeFeed = () => {
  const { homeFeedPosts } = useSelector((state) => state.posts);
  const { ownerData } = useSelector((state) => state.users);

  let filteredHomeFeed = JSON.parse(JSON.stringify(homeFeedPosts));

  filteredHomeFeed = filteredHomeFeed.filter(
    (post) =>
      ownerData.following.some((user) => user._id === post.user_id) ||
      post.user_id === ownerData._id
  );

  return (
    <>
      <Filter />
      <NewPostCard />
      <div>
        {filteredHomeFeed.map((post) => {
          return <PostCard key={post.id} postData={post} />;
        })}
      </div>
    </>
  );
};

export default HomeFeed;
