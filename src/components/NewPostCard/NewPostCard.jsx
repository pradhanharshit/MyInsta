import Card from "../Card/Card"
import {PhotoIcon, FaceSmileIcon} from "@heroicons/react/24/outline"

const NewPostCard = () => {
  return (
    <Card>
      <div className="flex gap-3">
        <div>
        <img className="w-12 rounded-full overflow-hidden" src="Profile.png" alt="" />
        </div>
        <textarea className="grow rounded-2xl p-3 border-2 focus:border-blue-400 outline-none" placeholder="What's on your mind?" id=""></textarea>
      </div>

      <div className="flex items-center gap-3 ml-3 mt-3">
        <div>
          <input className="hidden" type="file" id="post-input" />
          <label htmlFor="post-input"><PhotoIcon className="stroke-blue-400 h-8 w-8"/></label>
        </div>
        <div>
          <FaceSmileIcon className="stroke-blue-400 h-8 w-8"/>
        </div>
        <div className="grow text-right">
          <button className="bg-blue-400 px-4 py-1 rounded-2xl text-white mr-4">Post</button>
        </div>
      </div>
    </Card>
  )
}

export default NewPostCard