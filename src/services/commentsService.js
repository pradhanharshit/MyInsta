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
