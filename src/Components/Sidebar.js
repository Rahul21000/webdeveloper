import  { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const { isactived, setIsactived } = useState("hello");
   const theme= {
      borderRadius: "8.889px",
      border: " 0.889px solid #413b89",
      boxShadow:
        "0px 1.7777777910232544px 1.7777777910232544px 0px rgba(0, 0, 0, 0.1)",
        padding: "12px 35px"
    }
  
  const handleR=()=>{
  //  
  }
  return (
    <div className="sidebar-layout">
      <div className="wrapper">
        <div className="dash-btn">Dashboard</div>
        <div className="myprofile-btn">
          <img src="/Images/Arrow-right.svg" alt="gt" />
          
          <Link to="/" >My Profile </Link>
         
        </div>
        <div className="myconnection-btn">
          <img src="/Images/Arrow-right.svg" alt="gt" />
          <Link to="/myconnection" >My Connection </Link>
        </div>
      </div>
      <Link className="logout" to="/login" >
       
        Log Out
      </Link>
    </div>
  );
};
export default Sidebar;
