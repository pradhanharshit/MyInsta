import "./App.css";
import BottomBar from "../src/components/BottomBar/BottomBar";
import SideBar from "../src/components/SideBar/SideBar";
import SearchBar from "../src/components/SearchBar/SearchBar";
import HomeProfile from "../src/components/HomeProfile/HomeProfile";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { themeObject } = useTheme();
  return (
    <div
      className="home-container w-m-4xl"
      style={{ backgroundColor: themeObject.primary }}
    >
      <div className="home-left">
        <SideBar />
      </div>
      <div className="home-center">
        <Outlet />
      </div>
      <div className="home-right">
        <SearchBar />
        <HomeProfile />
      </div>
      <BottomBar />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
