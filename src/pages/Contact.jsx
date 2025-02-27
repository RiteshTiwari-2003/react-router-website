import { useNavigate } from "react-router-dom";


const Contact = () => {
  const navigate=useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="contact-buttons">
        <button onClick={()=>navigate('info')}>Contact info</button>
        <button onClick={()=>navigate('form')}>Contact form</button>
      </div>
    </div>
  )
}

export default Contact
