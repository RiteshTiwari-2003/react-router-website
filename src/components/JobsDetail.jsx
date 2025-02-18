import { useParams } from "react-router-dom"


const JobsDetail = () => {
    const {id}=useParams();
  return (
    <div>
      <h1>Id is this:{id}</h1>
    </div>
  )
}

export default JobsDetail
