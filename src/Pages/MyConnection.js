import "./MyConnection.css";
import Connected from "../Components/Connected";
import Recommend from "../Components/Recommend";
import MainLayout from "../Layout/MainLayout";
const Index = () => {
  return (
    <MainLayout>
      <div className="blue-frame">
        {" "}
        <div>My Connection</div>
      </div>
      <div className="connected-container">
        <Connected></Connected>
        <Connected></Connected>
        <Connected></Connected>
      </div>
      <div className="people-connect">People you can also connect</div>
      <div className="recommed-container">
        <Recommend></Recommend>
        <Recommend></Recommend>
      </div>
      </MainLayout>
  );
};
export default Index;
