import axios from "axios";

export const likePost = async (postId, authToken) => {
  try {
    const res = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const dislikePost = async (postId, authToken) => {
  try {
    const res = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
