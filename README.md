# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


#  difference between Link and Navlink

like link and navlink tag used for navigation between different different page using navbar like link and navlink perform like anchor tag which has active class like on which link i am currently present in that anchor tag class active is added ike class="active"

In react router both Navlink and Link tag used for navigation and but htey have key differnce in functionality

1: Link:
    used for basic navigation between routes without reloading the page 
    Does not apply any style automatically based on the active route 

    import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

2. NavLink: 
Extends Link with an additional feature , it automatically applies on active class when the link matches with current url
can be customized using classname and style props 

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
    </nav>
  );
}

<NavLink to="/home" style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}>
  Home
</NavLink>


# navigation using useNaviagte hook;
some time you want to navigate with different different page without any Link and navLink but with program 

# what is route parameters and how to use it ?
route parameters are values that are dynamically added into page url, ecommerce website are great example of route parameter