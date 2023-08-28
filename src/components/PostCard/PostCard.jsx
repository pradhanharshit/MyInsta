/* eslint-disable react/prop-types */
import "./PostCard.css";
import Card from "../Card/Card";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  PaperAirplaneIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../../context/ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import {
  likePostHandler,
  dislikePostHandler,
} from "../../services/likedislikeService";
import { onPostUpdate } from "../../store/postSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import CommentsModal from "../CommentsModal/CommentsModal";
import { deletePostHandler } from "../../services/postService";

const PostCard = ({ postData }) => {
  const { themeObject } = useTheme();
  const { authToken } = useSelector((state) => state.auth);
  const { ownerData } = useSelector((state) => state.users);

  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [openEditPost, setOpenEditPost] = useState(false);
  const [editPost, setEditPost] = useState(false);

  const dispatch = useDispatch();

  const likePost = () => {
    dispatch(onPostUpdate());
    toast.success("Post Liked!!");
    dispatch(likePostHandler(postData._id, authToken));
  };

  const dislikePost = () => {
    dispatch(onPostUpdate());
    toast.success("Post Disliked!!");
    dispatch(dislikePostHandler(postData._id, authToken));
  };

  const closeOpenModal = () => {
    setOpenCommentModal(false);
  };

  // console.log(postData);

  return (
    <>
      {openCommentModal && (
        <CommentsModal
          closeOpenModal={closeOpenModal}
          comments={postData.comments}
          postId={postData._id}
        />
      )}
      <Card>
        <div className="flex justify-between">
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
          {postData.user_id === ownerData._id && (
            <div className="flex">
              <EllipsisHorizontalIcon
                className="h-[30px] w-[30px]"
                style={{ color: themeObject.text }}
                onClick={() => setOpenEditPost(!openEditPost)}
              />
              {openEditPost && (
                <div className="relative">
                  <div className="absolute flex flex-col top-7 right-0 w-max bg-blue-400 text-white p-3 rounded-xl">
                    <button>Edit post</button>
                    <div
                      className="border-t-2 m-1.5"
                      style={{ color: themeObject.color }}
                    ></div>
                    <button
                      onClick={() => {
                        deletePostHandler(postData._id, authToken);
                        dispatch(onPostUpdate());
                        toast.success("Post deleted!!");
                      }}
                    >
                      Delete post
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
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
                className="icons h-[30px] w-[30px] text-red-400 hover:animate-bounce"
                onClick={() => {
                  // console.log(postData);
                  postData.likes.likedBy.some(
                    (user) => user._id === ownerData._id
                  )
                    ? dislikePost()
                    : likePost();
                }}
                style={{
                  fill: postData.likes.likedBy.some(
                    (user) => user._id === ownerData._id
                  )
                    ? "rgb(248 113 113)"
                    : "none",
                }}
              />
              <span style={{ color: themeObject.text }}>
                {postData.likes.likeCount}
              </span>
            </div>
            <div className="flex gap-1">
              <ChatBubbleOvalLeftIcon
                className="icons h-[30px] w-[30px] text-gray-500 hover:scale-125 "
                onClick={() => setOpenCommentModal(!openCommentModal)}
              />
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
    </>
  );
};

export default PostCard;
