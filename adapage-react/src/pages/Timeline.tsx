import { TimeLineItem } from "../components/TimelineItem";
import { timelineData } from "../data";
import '../App.css'


export default function Timeline() {
  return (
    <>
    <nav>
      <button><Link to="/">Home</Link></button>
      <button><Link to="/quotes">Citations</Link></button>
      <button><Link to="/timeline">Timeline</Link></button>
    </nav>
    <div>
      <h1>Timeline</h1>
      {timelineData. length > 0 && (
        <div className="timeline-container">
          {timelineData.map((data, idx) => <TimeLineItem data={data} key={idx} />
          )}
        </div>
      )}
    </div>
    </>
  );
}