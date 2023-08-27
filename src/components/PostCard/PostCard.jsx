/* eslint-disable react/prop-types */
import "./PostCard.css";
import Card from "../Card/Card";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../../context/ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import { likePostHandler } from "../../services/likedislikeService";
import { onPostUpdate } from "../../store/postSlice";

const PostCard = ({ postData }) => {
  const { themeObject } = useTheme();
  const { authToken } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const likePost = () => {
    // console.log(postData._id);
    dispatch(onPostUpdate());
    dispatch(likePostHandler(postData._id, authToken));
  };

  return (
    <Card>
      <div className="flex gap-3">
        <div>
          <img
            className="rounded-full w-14 h-14"
            src={postData.profilePicture}
            alt=""
          />
        </div>
        <div className="text-center">
          <p className="text-lg" style={{ color: themeObject.text }}>
            {postData.firstName} {postData.lastName}
          </p>
          <p
            className="text-sm text-gray-600"
            style={{ color: themeObject.text }}
          >
            {postData.username}
          </p>
        </div>
      </div>

      <div className="">
        <img
          className="rounded-3xl mt-4 p-1 overflow-hidden"
          src={postData.media}
          alt=""
        />
      </div>

      <div>
        <p className="mt-4 ml-1" style={{ color: themeObject.text }}>
          {postData.content}
        </p>
      </div>

      <div className="mt-4 flex justify-between">
        <div className="flex gap-3">
          <div className="flex gap-1">
            <HeartIcon
              className="icons h-[30px] w-[30px] text-red-400 drop-shadow-2xl hover:animate-bounce"
              onClick={likePost}
            />
            <span style={{ color: themeObject.text }}>
              {postData.likes.likeCount}
            </span>
          </div>
          <div className="flex gap-1">
            <ChatBubbleOvalLeftIcon className="icons h-[30px] w-[30px] text-gray-500 hover:scale-125 " />
            <span style={{ color: themeObject.text }}>
              {postData.comments.length}
            </span>
          </div>
          <div>
            <PaperAirplaneIcon className="icons h-[28px] w-[28px] text-blue-400 hover:scale-125" />
          </div>
        </div>
        <div>
          <BookmarkIcon className="icons h-[30px] w-[30px] text-green-400 hover:scale-125" />
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
