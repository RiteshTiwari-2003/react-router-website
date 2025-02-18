
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

import ContactLayout from "./Layout/Contactlayout";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";
import JobsLayout from "./Layout/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobsDetail, { jobsDetailLoader } from "./components/JobsDetail";


const App = () => {
  const router=createBrowserRouter(createRoutesFromElements(<Route path='/' element={RootLayout}>
<Route index element={<Home/>}/>
        <Route path="products" element={<Products/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<ContactLayout/>}>
        <Route path='info' element={<ContactInfo/>}></Route>
        <Route path='Form' element={<ContactForm/>}></Route>
        </Route>
        <Route path="jobs" element={<JobsLayout/>}>
        <Route index element={<Jobs/>} loader={jobsLoader}/>
        <Route path=":id" element={<JobsDetail/>} loader={jobsDetailLoader}/>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
  </Route>))
  return (
    <RouterProvider router={router} />
  )
}

export default App
