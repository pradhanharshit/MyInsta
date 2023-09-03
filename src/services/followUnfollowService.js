import axios from "axios";

export const followUser = async (followUserId, authToken) => {
  try {
    const res = await axios.post(
      `api/users/follow/${followUserId}/`,
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

export const unfollowUser = async (followUserId, authToken) => {
  try {
    const res = await axios.post(
      `api/users/unfollow/${followUserId}/`,
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
