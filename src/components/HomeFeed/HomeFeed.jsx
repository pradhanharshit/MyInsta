import PostCard from "../../components/PostCard/PostCard"
import Filter from "../../components/Filter/Filter"
import NewPostCard from "../NewPostCard/NewPostCard"

const HomeFeed = () => {
  return (
    <>
        <Filter />
        <NewPostCard />
        <PostCard />
    </>
  )
}

export default HomeFeed