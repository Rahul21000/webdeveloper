import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [name,setName]=useState("rahul rathore")
  const [open,setOpen]=useState(false);
  return (
    <div className="navbar-layout">
      <div className="nav-div">
        <img src="/Images/Notification.svg" alt="" />
        <div className="wrapper-1">
          <img src="/Images/nav-image.svg" alt="" />
          <div>
          <p>welcome back,</p>
          <h3>{name}</h3>
          </div>
          <div className="nav_profile">

          <img className={open?"before_click":"after_click"} src="/Images/Arrow-Down.svg"alt="" onClick={()=>setOpen(!open)} />
          {open ?
      <div className="popup_div">
        <ul>
          <li>profile</li>
          <li>setting</li>
          <li>about</li>
          <li>logout</li>
        </ul>
      </div>
      :""}
      </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
