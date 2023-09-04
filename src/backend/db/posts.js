import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "f115a118-cc35-41e5-84d9-dc713bd9ac90",
    user_id: "531585dd-f521-4cb3-a3e9-415e3fec4cc4",
    content: "I love Cars and the thrill that comes with them",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "test@harshit",
    firstName: "Harshit",
    lastName: "Pradhan",
    profilePicture:
      "https://i.pinimg.com/736x/0d/64/14/0d64145c56a53e2886274bf99a10d7d0.jpg",
    media:
      "https://images.unsplash.com/photo-1681820817824-6071d0830df9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "5a62d0c4-06d5-4c48-b367-e4e6c45bbaf3",
    user_id: "531585dd-f521-4cb3-a3e9-415e3fec4cc4",
    content: "Mountains are where the peace is",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "test@harshit",
    firstName: "Harshit",
    lastName: "Pradhan",
    profilePicture:
      "https://i.pinimg.com/736x/0d/64/14/0d64145c56a53e2886274bf99a10d7d0.jpg",
    media:
      "https://i.pinimg.com/564x/f9/2e/38/f92e38ac309ae2bbc873186ff32c9da8.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "e7fee945-af35-4028-80ac-d139528cc1dd",
    user_id: "531585dd-f521-4cb3-a3e9-415e3fec4cc4",
    content: "You say MSD..I hear GOAT!!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "test@harshit",
    firstName: "Harshit",
    lastName: "Pradhan",
    profilePicture:
      "https://i.pinimg.com/736x/0d/64/14/0d64145c56a53e2886274bf99a10d7d0.jpg",
    media:
      "https://i.pinimg.com/564x/19/25/8f/19258fcd3b76119d1a41a940e301c1f8.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "04ea6b80-247e-4410-9bd2-d3807b1fc6be",
    user_id: "caac2a91-4e40-46ea-813c-ddcbf777be8e",
    content: "Poetry in action!!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "test@2",
    firstName: "User",
    lastName: "2",
    profilePicture:
      "https://i.pinimg.com/564x/84/fd/cd/84fdcdda87fd125115132bfc65b83202.jpg",
    media:
      "https://i.pinimg.com/564x/66/07/e4/6607e4a5c7a09df9141584c6291dd123.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "7c884a9f-87c4-4db3-9aec-b1905d13f772",
    user_id: "caac2a91-4e40-46ea-813c-ddcbf777be8e",
    content: "Bumstead🦍",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "test@2",
    firstName: "User",
    lastName: "2",
    profilePicture:
      "https://i.pinimg.com/564x/84/fd/cd/84fdcdda87fd125115132bfc65b83202.jpg",
    media:
      "https://i.pinimg.com/564x/db/a9/d6/dba9d6f9e0df53703b81afcb83ba918d.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "98ee0df5-f406-4658-95ba-9b6467cd3bf9",
    user_id: "7372bf09-f39e-40e2-8de3-94c8510efd67",
    content: "Eat Healthy Stay Fit",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "test@3",
    firstName: "User",
    lastName: "3",
    profilePicture:
      "https://i.pinimg.com/564x/81/7d/2c/817d2ccf7b502274f0c0dbaa616a5eee.jpg",
    media:
      "https://i.pinimg.com/736x/af/2a/69/af2a69acc6cef82c99f76e9c79965c4a.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
