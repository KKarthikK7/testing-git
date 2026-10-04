import { Link } from "react-router-dom"
import Dynamic from "./Dynamic"

const Contact = () => {
  return (
    <>
    <h1>welcome to contact</h1>
    {Dynamic.map((data)=>(
      <div key={data.id}><h1>{data.name}</h1>
      <h3>{data.age}</h3>
      <Link to={`/contact/${data.id}`}>View</Link></div>
    ))}
    </>
  )
}

export default Contact