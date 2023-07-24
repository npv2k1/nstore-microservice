import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const useAuthUser = ()=>{
  const {user} = useContext(AuthContext)
  return user
}