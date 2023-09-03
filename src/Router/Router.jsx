import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import SignUp from "../pages/Signup/SignUp";
import App from "../App";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import Profile from "../pages/Profile/Profile";
import Explore from "../pages/Explore/Explore";
import ConnectPeople from "../pages/ConnectPeople/ConnectPeople";
import HomeFeed from "../components/HomeFeed/HomeFeed";
import Followers from "../pages/Followers/Followers";
import Following from "../pages/Following/Following";
import ProfilePosts from "../components/ProfilePosts/ProfilePosts";
import AuthRoute from "../components/AuthRoute/AuthRoute";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Connections from "../pages/Connections/Connections";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Route>
        <Route path="/" element={<App />}>
          <Route element={<PrivateRoute />}>
            <Route index element={<HomeFeed />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/connections" element={<Connections />}>
              <Route path="/connections/following" element={<Following />} />
              <Route path="/connections/followers" element={<Followers />} />
            </Route>
            <Route path="/profile/:username/" element={<Profile />}>
              <Route index element={<ProfilePosts />} />
            </Route>
            <Route path="/connect-people" element={<ConnectPeople />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
