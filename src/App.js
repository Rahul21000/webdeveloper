import "./App.css";
import Profile from "./Pages/Profile";
// import MainLayout from "./Layout/MainLayout";
import MyConnection from "./Pages/MyConnection";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import NoPage from "./Pages/NoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Profile />} />
          <Route path="Myconnection" element={<MyConnection />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
