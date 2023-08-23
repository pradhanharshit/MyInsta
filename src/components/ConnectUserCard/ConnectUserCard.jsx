import Card from "../Card/Card"

const ConnectUserCard = () => {
  return (
    <>
    <Card>
        <div className="flex justify-between items-center">
            <img className="rounded-full h-[50px] w-[50px]" src="Profile.png" alt="" />
            <div className="text-center">
                <p className="text-lg">Name</p>
                <p className="text-sm text-gray-700">UserName</p>
            </div>
            <div className="text-lg font-semibold">
            <button to="my-profile/Liked" className="px-3 py-2 rounded-3xl bg-blue-400 text-white">follow</button>
            </div>
        </div>
    </Card>

    <Card>
        <div className="flex justify-between items-center">
            <img className="rounded-full h-[50px] w-[50px]" src="Profile.png" alt="" />
            <div className="text-center">
                <p className="text-lg">Name</p>
                <p className="text-sm text-gray-700">UserName</p>
            </div>
            <div className="text-lg font-semibold">
            <button to="my-profile/Liked" className="px-3 py-2 rounded-3xl bg-blue-400 text-white">follow</button>
            </div>
        </div>
    </Card>

    <Card>
        <div className="flex justify-between items-center">
            <img className="rounded-full h-[50px] w-[50px]" src="Profile.png" alt="" />
            <div className="text-center">
                <p className="text-lg">Name</p>
                <p className="text-sm text-gray-700">UserName</p>
            </div>
            <div className="text-lg font-semibold">
            <button to="my-profile/Liked" className="px-3 py-2 rounded-3xl bg-blue-400 text-white">follow</button>
            </div>
        </div>
    </Card>

    <Card>
        <div className="flex justify-between items-center">
            <img className="rounded-full h-[50px] w-[50px]" src="Profile.png" alt="" />
            <div className="text-center">
                <p className="text-lg">Name</p>
                <p className="text-sm text-gray-700">UserName</p>
            </div>
            <div className="text-lg font-semibold">
            <button to="my-profile/Liked" className="px-3 py-2 rounded-3xl bg-blue-400 text-white">follow</button>
            </div>
        </div>
    </Card>
    </>
  )
}

export default ConnectUserCard