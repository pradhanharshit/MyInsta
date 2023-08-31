import { useSelector } from "react-redux";
import { useTheme } from "../../context/ThemeContext";
import PostCard from "../../components/PostCard/PostCard";

const Explore = () => {
  const { themeObject } = useTheme();
  const { exploreFeedPosts } = useSelector((state) => state.posts);
  return (
    <div>
      <div className="text-center">
        <h1
          className="font-serif font-bold text-2xl m-8"
          style={{ color: themeObject.text }}
        >
          Explore
        </h1>
      </div>
      {exploreFeedPosts.map((post) => {
        return <PostCard key={post._id} postData={post} />;
      })}
    </div>
  );
};

export default Explore;
