import BottomBar from "../../components/BottomBar/BottomBar"
import SideBar from "../../components/SideBar/SideBar"
import SearchBar from "../../components/SearchBar/SearchBar"
import HomeProfile from "../../components/HomeProfile/HomeProfile"
import "./Home.css"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-container w-m-4xl">
        <div className="home-left"><SideBar /></div>
        <div className="home-center">
            <Outlet />
        </div>
        <div className="home-right">
        <SearchBar />
        <HomeProfile />
        </div>
        <BottomBar></BottomBar>
    </div>
  )
}

export default Home