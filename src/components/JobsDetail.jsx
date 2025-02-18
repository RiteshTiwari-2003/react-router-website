
import { useLoaderData } from 'react-router-dom';

const JobsDetail = () => {

  const jobDetails=useLoaderData();
    
  return (
    <div>
      <p><b>Job Title: </b>{jobDetails.title}</p>
      <p><b>Job Salery: </b>{jobDetails.salary}</p>
      <p><b>Job location: </b>{jobDetails.location}</p>
      <p><b>Description: </b>Are you passionate about creating exciting user-friendly websites , we are looking for a friendly and talented 
      web developer to join our vibrant team. in this role you will collaborate closely with designer and other developer
      to bring innovative web solution to life.</p>
      <button>Apply now</button>
    </div>
  )
}

export default JobsDetail

export const jobsDetailLoader=async ({params})=>{
  const {id}=params;
  const response=await fetch("http:localhost:5000/jobs/"+id);
  return response.json();

}
