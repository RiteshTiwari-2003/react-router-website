

import Contact from '../components/Contact';
import {Outlet} from "react-router-dom";

const Contactlayout = () => {
  return (
    <div>
      <Contact/>
      <Outlet/>
    </div>
  )
}

export default Contactlayout
