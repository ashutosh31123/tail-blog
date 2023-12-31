import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";


// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext({})

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUser()
  }, [])

  const getUser=async()=>{
    try{
      const res=await axios.get(URL+"/api/auth/refetch",{withCredentials:true})
      // console.log(res.data)
      setUser(res.data)

    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
