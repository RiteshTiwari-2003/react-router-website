

import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate=useNavigate();
  return (
    <div>
      <h2>404 | page Not Found</h2>
      <br />
      <button onClick={()=>{navigate('/')}}>Go To Home Page</button>
    </div>
  )
}

export default NotFound
