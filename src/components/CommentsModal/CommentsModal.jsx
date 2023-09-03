import { useTheme } from "../../context/ThemeContext";
import { XMarkIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import "./CommentsModal.css";
import { useEffect, useState } from "react";
import {
  deleteCommentHandler,
  editCommentHandler,
  getCommentsHandler,
  postCommentHandler,
} from "../../services/commentsService";
import { useSelector, useDispatch } from "react-redux";
import { onPostUpdate } from "../../store/postSlice";
import { toast } from "react-toastify";
import { getAllPosts } from "../../services/postService";

const CommentsModal = ({ postId, closeOpenModal }) => {
  const { themeObject } = useTheme();
  const { authToken } = useSelector((state) => state.auth);
  const { ownerData } = useSelector((state) => state.users);
  const [postComment, setPostComment] = useState("");
  const [comments, setComments] = useState([]);

  const [editComment, setEditComment] = useState(false);
  const [changedComment, setChangedComment] = useState("");
  const [editCommentId, setEditCommentId] = useState("");
  const [commentEdited, setCommentEdited] = useState(false);

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
      toast.success("Comment Added!!");
    }
  };

  useEffect(() => {
    getCommentsHandler(postId).then((res) => setComments(res.data.comments));
  }, [commentEdited]);

  //   console.log(comments);

  return (
    <>
      <div
        className="modal-wrapper"
        onClick={closeOpenModal}
        style={{ backgroundColor: themeObject.secondary }}
      ></div>
      <div
        className="modal-container p-6 w-[30%] h-[40%] rounded-2xl border-2 border-blue-400  overflow-y-scroll"
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
              <div key={index} className="flex flex-col space-y-2 mb-3">
                <div className="flex justify-between">
                  <div className="flex space-x-1">
                    <img
                      className="h-[30px] w-[30px] rounded-full"
                      src={comment.profilePicture}
                      alt=""
                    />
                    <p className="text-blue-400 font-bold">
                      {comment.username}
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    <PencilIcon
                      className="h-[20px] w-[20px]"
                      style={{ color: themeObject.text }}
                      onClick={() => {
                        setEditComment(!editComment);
                        if (editCommentId === "") {
                          setEditCommentId(comment._id);
                        } else setEditCommentId("");
                        setChangedComment(comment.content);
                      }}
                    />
                    <TrashIcon
                      className="h-[20px] w-[20px]"
                      style={{ color: themeObject.text }}
                      onClick={() => {
                        deleteCommentHandler(postId, comment._id, authToken);
                        setCommentEdited(!commentEdited);
                        dispatch(getAllPosts());
                        toast.success("Comment deleted!!");
                      }}
                    />
                  </div>
                </div>
                {editCommentId === comment._id ? (
                  <div className="flex justify-between">
                    <input
                      className="rounded-xl p-1 border-blue-400 border-2"
                      type="text"
                      value={changedComment}
                      onChange={(e) => setChangedComment(e.target.value)}
                      style={{
                        backgroundColor: themeObject.secondary,
                        color: themeObject.text,
                      }}
                    />
                    <button
                      className="bg-blue-400 rounded-xl px-2 py-0.5"
                      style={{ color: themeObject.text }}
                      onClick={() => {
                        editCommentHandler(
                          { ...comment, content: changedComment },
                          postId,
                          comment._id,
                          authToken
                        );
                        setCommentEdited(!commentEdited);
                        setEditCommentId("");
                        toast.success("Comment Edited!!");
                      }}
                    >
                      edit
                    </button>
                  </div>
                ) : (
                  <p style={{ color: themeObject.text }}>{comment.content}</p>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CommentsModal;
