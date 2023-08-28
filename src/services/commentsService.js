import axios from "axios";

export const postCommentHandler = async (postId, commentData, authToken) => {
  try {
    const res = await axios.post(
      `api/comments/add/${postId}`,
      { commentData },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCommentsHandler = async (postId) => {
  try {
    const res = await axios.get(`api/comments/${postId}`);
    // console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const editCommentHandler = async (
  commentData,
  postId,
  commentId,
  authToken
) => {
  try {
    // console.log("new", newcomment);
    const res = await axios.post(
      `api/comments/edit/${postId}/${commentId}`,
      { commentData },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCommentHandler = async (postId, commentId, authToken) => {
  try {
    await axios.post(
      `api/comments/delete/${postId}/${commentId}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
