import { useTheme } from "../../context/ThemeContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./CommentsModal.css";
import { useEffect, useState } from "react";
import {
  getCommentsHandler,
  postCommentHandler,
} from "../../services/commentsService";
import { useSelector, useDispatch } from "react-redux";
import { onPostUpdate } from "../../store/postSlice";

const CommentsModal = ({ postId, closeOpenModal }) => {
  const { themeObject } = useTheme();
  const { authToken } = useSelector((state) => state.auth);
  const { ownerData } = useSelector((state) => state.users);
  const [postComment, setPostComment] = useState("");
  const [comments, setComments] = useState([]);

  const dispatch = useDispatch();

  const commentHandler = () => {
    if (postComment !== "") {
      postCommentHandler(
        postId,
        { content: postComment, profilePicture: ownerData.profilePicture },
        authToken
      );
      getCommentsHandler(postId).then((res) => setComments(res.data.comments));
      dispatch(onPostUpdate());
      setPostComment("");
    }
  };

  useEffect(() => {
    getCommentsHandler(postId).then((res) => setComments(res.data.comments));
  }, []);

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
        {comments.length > 0 &&
          comments.map((comment, index) => {
            return (
              <div key={index} className="flex space-x-4 mb-1">
                <div className="flex space-x-1">
                  <img
                    className="h-[25px] w-[25px] rounded-full"
                    src={comment.profilePicture}
                    alt=""
                  />
                  <p className="text-blue-400 font-bold">{comment.username}</p>
                </div>
                <p style={{ color: themeObject.text }}>{comment.content}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CommentsModal;
