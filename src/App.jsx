
import './App.css'
import LoginPage from "./pages/Login/LoginPage"
import {  createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import SignUp from './pages/Signup/SignUp'
import Home from "./pages/Home/Home"
import Bookmarks from './pages/Bookmarks/Bookmarks'
import MyProfile from './pages/MyProfile/MyProfile'
import ConnectPeople from './pages/ConnectPeople/ConnectPeople'
import HomeFeed from './components/HomeFeed/HomeFeed'
import Followers from './pages/Followers/Followers'
import Following from './pages/Following/Following'
import Profile from './components/Profile/Profile'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeFeed />}/>
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/my-profile" element={<MyProfile />}>
            <Route index element={<Profile />} />
            <Route path="following" element={<Following />} />
            <Route path="followers" element={<Followers />} />
          </Route>
          <Route path="/connect-people" element={<ConnectPeople />}>
            
          </Route>
        </Route>
    </Route>
  ))

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App

{/* <Routes> 
        
        </Routes> */}