import "./MainLayout.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="content-layout">{children}</div>
    </>
  );
};
export default MainLayout;
