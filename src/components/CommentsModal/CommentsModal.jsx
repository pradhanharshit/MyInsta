import { useTheme } from "../../context/ThemeContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./CommentsModal.css";
import { useState } from "react";
import { postCommentHandler } from "../../services/commentsService";
import { useDispatch, useSelector } from "react-redux";
import { onPostUpdate } from "../../store/postSlice";

const CommentsModal = ({ postId, closeOpenModal, comments }) => {
  const { themeObject } = useTheme();
  const { authToken } = useSelector((state) => state.auth);
  const [postComment, setPostComment] = useState("");

  const dispatch = useDispatch();

  const commentHandler = () => {
    if (postComment.length > 0) {
      postCommentHandler(postId, { content: postComment }, authToken);
      setPostComment("");
      dispatch(onPostUpdate());
    }
  };
  console.log(comments);
  return (
    <>
      <div
        className="modal-wrapper"
        onClick={closeOpenModal}
        style={{ backgroundColor: themeObject.secondary }}
      ></div>
      <div
        className="modal-container p-6 w-[30%] h-[30%] rounded-2xl border-2 border-blue-400  overflow-y-scroll"
        style={{ backgroundColor: themeObject.primary }}
      >
        <XMarkIcon
          className="h-[25px] w-[25px] text-blue-400 mb-3"
          onClick={closeOpenModal}
        />
        <div className="w-[100%] flex justify-between  mb-4">
          <input
            className="rounded-xl p-1.5 border-blue-400 border-2 w-[60%]"
            type="text"
            placeholder="Add Comment..."
            value={postComment}
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
            onChange={(e) => setPostComment(e.target.value)}
          />
          <button
            className="bg-blue-400 rounded-xl px-2 py-0.5"
            style={{ color: themeObject.text }}
            onClick={commentHandler}
          >
            Add
          </button>
        </div>
        {comments.map((comment, index) => {
          return (
            <div key={index} className="flex space-x-4 mb-1">
              <p className="text-blue-400 font-bold">{comment.username}</p>
              <p style={{ color: themeObject.text }}>{comment.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommentsModal;
