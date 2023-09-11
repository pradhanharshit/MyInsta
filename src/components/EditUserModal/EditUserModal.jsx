import { useTheme } from "../../context/ThemeContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./EditUserModal.css";
import { useDispatch, useSelector } from "react-redux";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  editUser,
  getOwnerData,
  getUserData,
} from "../../services/userService";

const EditUserModal = ({ setOpenUserEdit }) => {
  const { themeObject } = useTheme();
  const { ownerData } = useSelector((state) => state.users);

  const { user, authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [editPostBio, setEditPostBio] = useState(ownerData?.bio);

  const handleCoverMediaChange = async (e) => {
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
        editUser({ ...ownerData, coverPicture: data.url }, authToken);
        dispatch(getUserData(user._id));
        dispatch(getOwnerData(user._id));
        toast.success("Cover Media Uploaded!!");
      });
  };

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
        editUser({ ...ownerData, profilePicture: data.url }, authToken);
        dispatch(getOwnerData(JSON.parse(JSON.stringify(user._id))));
        dispatch(getUserData(user._id));
        toast.success("Post Media Uploaded!!");
      });
  };

  return (
    <>
      <div
        className="edit-modal-wrapper"
        style={{ backgroundColor: themeObject.secondary }}
      ></div>

      <div
        className="edit-modal-conatiner p-5 border-2 border-blue-400 rounded-2xl"
        style={{ backgroundColor: themeObject.primary }}
      >
        <XMarkIcon
          className="h-[25px] w-[25px] text-blue-400 mb-3 cursor-pointer"
          onClick={() => {
            setOpenUserEdit(false);
          }}
        />
        <div>
          <div className="edit-media-div relative">
            <img
              className="edit-cover-image rounded-t-3xl"
              src={ownerData?.coverPicture}
              alt=""
            />

            <div className="edit-media-cover-div p-3 bg-gray-700 opacity-50 rounded-full cursor-pointer">
              <input
                className="hidden"
                type="file"
                id="edit-media-cover"
                onChange={(e) => {
                  handleCoverMediaChange(e);
                  toast.success("Uploading Post Media!!");
                }}
              />
              <label htmlFor="edit-media-cover">
                <PhotoIcon
                  className="h-[35px] w-[35px] cursor-pointer"
                  style={{ color: themeObject.text }}
                />
              </label>
            </div>

            <div className="edit-profile-container absolute">
              <img
                className="h-[8rem] w-[8rem] rounded-full"
                src={ownerData?.profilePicture}
              />
              <div className="edit-media-profile-div p-3 bg-gray-700 opacity-50 rounded-full cursor-pointer">
                <input
                  className="hidden"
                  type="file"
                  id="edit-media-profile"
                  onChange={(e) => {
                    handlePostMediaChange(e);
                    toast.success("Uploading Post Media!!");
                  }}
                />
                <label htmlFor="edit-media-profile">
                  <PhotoIcon
                    className="h-[35px] w-[35px] cursor-pointer"
                    style={{ color: themeObject.text }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <textarea
          className="w-[100%] mt-[6rem] rounded-2xl p-3 border-2 focus:border-blue-400 outline-none"
          placeholder="What's on your mind?"
          value={editPostBio}
          onChange={(e) => {
            setEditPostBio(e.target.value);
          }}
          style={{
            backgroundColor: themeObject.primary,
            color: themeObject.text,
          }}
        ></textarea>

        <div className="w-[100%] text-center">
          <button
            className="bg-blue-400 px-4 py-1 rounded-2xl text-white mt-[2rem]"
            onClick={() => {
              editUser({ ...ownerData, bio: editPostBio }, authToken);
              dispatch(getOwnerData(user._id));
              dispatch(getUserData(user._id));
              setOpenUserEdit(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EditUserModal;
