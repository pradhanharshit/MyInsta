/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

const LoginForm = ({email, password, passwordType, setEmail, setPassword, setPasswordType, loginAttempt} ) => {

  return (
    <>
    <div className="flex justify-center items-center h-screen">
    <div className="w-[320px] border-gray-400 border text-center">
      <h1 className="font-bold font-serif text-3xl m-10">Instagram</h1>
      <input className="text-center border-2 p-1 m-1 w-[250px]" value={email} onChange={(e)=> {
        setEmail(e.target.value)
        }} type="email" placeholder="Email"/><br/>
      <input className=" text-center border-2 p-1  w-[250px] mb-1" value={password} onChange={(e)=>{
        setPassword(e.target.value)
        }} type={passwordType} placeholder="Password"/><br />
      <input className="mr-1 mb-6" type="checkbox" onClick={() => {
        passwordType === "password" ? setPasswordType("text") : 
        setPasswordType("password")
      }} id="passType"/>
      <label className="text-sm " htmlFor="passType">Show password</label><br/>
      
      <button className="bg-blue-400 p-1.5 w-[250px] rounded-md text-white mb-5" onClick={() => {
        loginAttempt()
      }}>Login</button>
      <div className="flex justify-center items-center space-x-4 mb-5">
      <div className="border-t border-gray-400 w-[100px] "></div>
      <p className="text-gray-400">OR</p>
      <div className="border-t border-gray-400 w-[100px]"></div>
      </div>
      <p className="mb-10">Don't have an account? <Link to="/signup"><span className="text-blue-400">Sign Up</span></Link></p>
    </div>
    </div>
    </>

  )
}

export default LoginForm