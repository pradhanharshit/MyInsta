import PostCard from "../../components/PostCard/PostCard";
import Filter from "../../components/Filter/Filter";
import NewPostCard from "../NewPostCard/NewPostCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const HomeFeed = () => {
  const { homeFeedPosts } = useSelector((state) => state.posts);
  const { ownerData } = useSelector((state) => state.users);
  const [sort, setSort] = useState("recent");
  const [homeFeedSort, setHomeFeedSort] = useState([]);

  useEffect(() => {
    sortFeed();
  }, [sort, homeFeedPosts]);

  const sortFeed = () => {
    setHomeFeedSort(
      homeFeedPosts?.slice().sort((postA, postB) => {
        switch (sort) {
          case "trending":
            return postB?.likes?.likeCount - postA?.likes?.likeCount;

          case "older":
            return (
              Number(
                postA?.createdAt.substring(0, 9).split("-").join("") +
                  postA?.createdAt.substring(11, 19).split(":").join("")
              ) -
              Number(
                postB?.createdAt.substring(0, 9).split("-").join("") +
                  postB?.createdAt.substring(11, 19).split(":").join("")
              )
            );

          case "recent":
            return (
              Number(
                postB?.createdAt.substring(0, 9).split("-").join("") +
                  postB?.createdAt.substring(11, 19).split(":").join("")
              ) -
              Number(
                postA?.createdAt.substring(0, 9).split("-").join("") +
                  postA?.createdAt.substring(11, 19).split(":").join("")
              )
            );
        }
      })
    );
  };

  return (
    <>
      <Filter sort={sort} setSort={setSort} />
      <NewPostCard />
      <div>
        {homeFeedSort
          ?.filter(
            (post) =>
              ownerData?.following.some((user) => user._id === post.user_id) ||
              post.user_id === ownerData._id
          )
          .map((post) => {
            return <PostCard key={post.id} postData={post} />;
          })}
      </div>
    </>
  );
};

export default HomeFeed;
