import PostCard from "../../components/PostCard/PostCard";
import Filter from "../../components/Filter/Filter";
import NewPostCard from "../NewPostCard/NewPostCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../services/postService";

const HomeFeed = () => {
  const { newPostAdded, allPosts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [newPostAdded]);

  return (
    <>
      <Filter />
      <NewPostCard />
      <div>
        {allPosts.map((post) => {
          return <PostCard key={post.id} postData={post} />;
        })}
      </div>
    </>
  );
};

export default HomeFeed;
