import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../context/ThemeContext";
import PostCard from "../../components/PostCard/PostCard";
import { useEffect } from "react";
import { getPagedPosts } from "../../services/postService";
import { setPageNum } from "../../store/postSlice";
import { useRef } from "react";

const Explore = () => {
  const { themeObject } = useTheme();
  const { pagedPosts, pagedPostStatus, pageNum } = useSelector(
    (state) => state.posts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPagedPosts({ pageNum }));
  }, [pageNum]);

  const loader = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(setPageNum());
      }
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

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
      {pagedPosts?.map((post) => {
        return <PostCard key={post._id} postData={post} />;
      })}
      <div ref={loader} className="text-gray-50 text-3xl pb-2" />
      {pagedPostStatus === "pending" && (
        <div
          className="text-3xl text-center"
          style={{ color: themeObject.text }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default Explore;
