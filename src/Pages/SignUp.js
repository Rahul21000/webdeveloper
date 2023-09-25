import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="sign">
      <form action=" ">
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label>
            <b>Email</b>
            <input
              className="em"
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />
          </label>
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
          <label>
            <b>Repeat Password</b>
            <input
              className="psw"
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="remember"
              style={{ marginBottom: "15px" }}
            />{" "}
            Remember me
          </label>

          <p>
            By creating an account you agree to our{" "}
            <a href=" " style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
            .
          </p>

          <div class="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
