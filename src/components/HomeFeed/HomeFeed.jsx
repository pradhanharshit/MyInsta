import PostCard from "../../components/PostCard/PostCard";
import Filter from "../../components/Filter/Filter";
import NewPostCard from "../NewPostCard/NewPostCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../services/postService";
import { getOwnerData } from "../../services/userService";
import { changeCurrentId } from "../../store/userSlice";

const HomeFeed = () => {
  const { newPostAdded, homeFeedPosts, postUpdated } = useSelector(
    (state) => state.posts
  );
  const { ownerData } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnerData(JSON.parse(JSON.stringify(user._id))));
    dispatch(changeCurrentId(ownerData._id));
  }, []);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [newPostAdded, postUpdated]);

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
