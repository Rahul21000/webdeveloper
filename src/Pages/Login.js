import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  
  return (
    <div className="login">
      <form action="" method="post">
        <div class="imgcontainer">
          <img src="/Images/Ellipse 255.svg" alt="Avatar" class="avatar" />
        </div>

        <div class="container">
          <label>
            <b>Username</b>
            <input
            className="usr"
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
          </label><br/>
          <label>
            <b>Password</b>
            <input
            className="psw"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </label>
          <button className="loginbtn" type="submit">Login</button>
        </div>
        
          <span class="ps" style={{textDecoration:"none"}}>
            If not register ?<Link to="/SignUp">Sign Up</Link>
          </span>
       
      </form>
    </div>
  );
};
export default Login;
