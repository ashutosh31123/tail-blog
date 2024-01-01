import { useContext } from "react";
import { userContext } from "../context/userContext";
import { URL } from "../url";
import axios from "axios";

const Menu = () => {
const {user}= useContext(userContext)
const {setUser}= useContext(userContext)

const handleLogout=async()=>{
  try{
    const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
    console.log(res)
    setUser(null)
    //navigate("/login")

  }
  catch(err){
    console.log(err)
  }
}


  return (
    <div className="bg-black w-[200px] flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
        {!user && <h3 className="text-white text-md hover:text-gray-500">Login</h3>}
        {!user && <h3 className="text-white text-md hover:text-gray-500">Register</h3>}
        {user && <h3 className="text-white text-md hover:text-gray-500">Profile</h3>}
        {user && <h3 className="text-white text-md hover:text-gray-500">Write</h3>}
        {user && <h3 className="text-white text-md hover:text-gray-500">My Blog</h3>}
        {user && <h3 onClick={handleLogout} className="text-white text-md hover:text-gray-500">Logout</h3>}
    </div>
  )
}

export default Menu