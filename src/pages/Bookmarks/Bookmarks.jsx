import { useSelector } from "react-redux";
import { useTheme } from "../../context/ThemeContext";
import PostCard from "../../components/PostCard/PostCard";

const Bookmarks = () => {
  const { themeObject } = useTheme();
  const { bookmarkedPosts } = useSelector((state) => state.posts);

  return (
    <div>
      <div className="text-center">
        <h1
          className="font-serif font-bold text-2xl m-8"
          style={{ color: themeObject.text }}
        >
          Bookmarked Posts
        </h1>
      </div>
      {bookmarkedPosts.length > 0 &&
        bookmarkedPosts.map((markedPost) => {
          return <PostCard key={markedPost._id} postData={markedPost} />;
        })}
    </div>
  );
};

export default Bookmarks;
