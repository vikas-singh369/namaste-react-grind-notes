import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Contact = ()=>{
  const {logedInUser } = useContext(UserContext)
  return (
    <div>
      <h1>Contact</h1>
      <h2>This is a Conatact page !</h2>

      <p>User: {logedInUser}</p>
    </div>
  )
}

export default Contact