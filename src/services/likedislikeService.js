import axios from "axios";

export const likePostHandler = async (postId, authToken) => {
  try {
    // console.log("try", postId, authToken);
    const res = await axios.post(
      `api/posts/like/${postId}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    // console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const dislikePostHandler = async (postId, authToken) => {
  try {
    const res = await axios.post(
      `api/posts/dislike/${postId}`,
      {},
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
