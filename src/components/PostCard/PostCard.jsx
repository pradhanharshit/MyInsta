import "./PostCard.css";
import Card from "../Card/Card";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const PostCard = ({ postData }) => {
  return (
    <Card>
      <div className="flex gap-3">
        <div>
          <img className="rounded-full w-14 h-14" src="Profile.png" alt="" />
        </div>
        <div className="text-center">
          <p className="text-lg">Name</p>
          <p className="text-sm text-gray-600">UserName</p>
        </div>
      </div>

      <div className="">
        <img
          className="rounded-3xl mt-4 p-1 overflow-hidden"
          src={postData.media}
          alt=""
        />
      </div>

      <div>
        <p className="mt-4 ml-1">{postData.content}</p>
      </div>

      <div className="mt-4 flex justify-between">
        <div className="flex gap-3">
          <div className="flex gap-1">
            <HeartIcon className="icons h-[30px] w-[30px] text-red-400 drop-shadow-2xl hover:animate-bounce" />
            <span>0</span>
          </div>
          <div className="flex gap-1">
            <ChatBubbleOvalLeftIcon className="icons h-[30px] w-[30px] text-gray-500 hover:scale-125 " />
            <span>0</span>
          </div>
          <div>
            <PaperAirplaneIcon className="icons h-[28px] w-[28px] text-blue-400 hover:scale-125" />
          </div>
        </div>
        <div>
          <BookmarkIcon className="icons h-[30px] w-[30px] text-green-400 hover:scale-125" />
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
