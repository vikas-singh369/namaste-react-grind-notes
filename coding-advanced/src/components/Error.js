import { useRouteError } from "react-router"
const Error = ()=>{
  const err = useRouteError();

  console.log(err)
  return (
    <div>
      <h1>Error Hai bhai</h1>
      <p>Something went wrong !!</p>
      <p>{err.status} : {err.statusText} </p>
      <p>{err.data}</p>
    </div>
  )
}

export default Error