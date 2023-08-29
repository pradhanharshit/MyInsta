import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Card from "../Card/Card";
import { PhotoIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { addPostHandler } from "../../services/postService";
import { useSelector, useDispatch } from "react-redux";
import { addedNewPost } from "../../store/postSlice";
import { ClickOutHandler } from "react-clickout-ts";
import EmojiPicker from "emoji-picker-react";
import { toast } from "react-toastify";

const NewPostCard = () => {
  const { theme, themeObject } = useTheme();
  const { authToken } = useSelector((state) => state.auth);
  const { ownerData } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const [postMedia, setPostMedia] = useState({});
  const [postContent, setPostContent] = useState("");
  const [imageReceived, setImageReceived] = useState(false);

  const [openEmojiSelector, setOpenEmojiSelector] = useState(false);

  const handlePostMediaChange = async (e) => {
    const imageFile = e.target.files[0];

    const url = `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUD_NAME
    }/image/upload`;

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    await fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setPostMedia(data.url);
        setImageReceived(true);
        toast.success("Media Uploaded!!");
      });
  };

  useEffect(() => {});
  return (
    <Card>
      <div className="flex gap-3">
        <div>
          <img
            className="w-12 rounded-full overflow-hidden"
            src="Profile.png"
            alt=""
          />
        </div>
        <textarea
          className="grow rounded-2xl p-3 border-2 focus:border-blue-400 outline-none"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          style={{
            backgroundColor: themeObject.primary,
            color: themeObject.text,
          }}
        ></textarea>
      </div>

      <div className="flex items-center gap-3 ml-3 mt-3">
        <div>
          <input
            className="hidden"
            type="file"
            id="post-input"
            onChange={(e) => {
              toast.success("Uploading Media!");
              handlePostMediaChange(e);
            }}
          />
          <label htmlFor="post-input">
            <PhotoIcon className="stroke-blue-400 h-8 w-8" />
          </label>
        </div>
        <div className="relative">
          <FaceSmileIcon
            className="stroke-blue-400 h-8 w-8"
            onClick={() => setOpenEmojiSelector(true)}
          />
          <ClickOutHandler onClickOut={() => setOpenEmojiSelector(false)}>
            <div className="absolute">
              {openEmojiSelector && (
                <div>
                  <EmojiPicker
                    theme={theme}
                    onEmojiClick={(e) => {
                      setPostContent(postContent + e.emoji);
                    }}
                  />
                </div>
              )}
            </div>
          </ClickOutHandler>
        </div>
        <div className="grow text-right">
          <button
            className="bg-blue-400 px-4 py-1 rounded-2xl text-white mr-4"
            onClick={() => {
              if (imageReceived) {
                addPostHandler(
                  {
                    comments: [],
                    content: postContent,
                    media: postMedia,
                    firstName: ownerData.firstName,
                    lastName: ownerData.lastName,
                    profilePicture: ownerData.profilePicture,
                    user_id: ownerData._id,
                  },
                  authToken
                );
                dispatch(addedNewPost());
                setPostContent("");
                setPostMedia("");
                setImageReceived(false);
                toast.success("Posted!!");
              } else toast.warning("Upload Media!!");
            }}
          >
            Post
          </button>
        </div>
      </div>
    </Card>
  );
};

export default NewPostCard;
