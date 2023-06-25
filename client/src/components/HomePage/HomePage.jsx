import SideNav from "../../pages/HomePage/SideNav/SideNav";
import TimeLine from "../../pages/HomePage/TimeLine/TimeLine";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <div className="sideNav">
          <SideNav />
        </div>
        <div className="timeline">
          <TimeLine />
        </div>
      </div>
    </>
  );
};

export default HomePage;
