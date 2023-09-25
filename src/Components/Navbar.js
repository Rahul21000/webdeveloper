import "./Navbar.css";

// const Navprofile=()=>{
//     return(
//         <div className='navbarprofile-layout'>
//             <div className='wrapper'>

//             </div>

//         </div>
//     )
// }

const Navbar = () => {
  // const name = "Vishnu Swaroop";
  const name = "rahul";
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
          <img src="/Images/Arrow-Down.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
