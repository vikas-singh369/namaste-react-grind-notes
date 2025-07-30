import { useState } from "react"

const User = ({
  name,
  location
})=> {

  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div>
      <h1>Name : {name}</h1>
      <h2>Location: {location} </h2>
      <h4>Count 1 : {count}</h4>
      <h4>Count 2 : {count2}</h4>
    </div>
  )
}

export default User