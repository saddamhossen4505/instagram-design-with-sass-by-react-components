import Content from "../Content/Content";
import Suggestions from "../Suggestions/Suggestions";
import "./TimeLine.scss";

const TimeLine = () => {
  return <>
    
    <div className="timeline_area">
      <div className="content">
        <Content/>
      </div>
      <div className="suggestons">
        <Suggestions/>
      </div>
    </div>

  </>;
};

export default TimeLine;
