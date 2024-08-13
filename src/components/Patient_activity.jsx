import './activity.css';
import { GrNext } from "react-icons/gr";
import { Link } from 'react-router-dom';

export function Activity(props) {
  return (
    <div className="activity">
        
      <div className="act">{props.icon} &nbsp;<b>{props.title}</b></div>
      <Link to={props.link}>
        <div className="act">
          {/* <GrNext style={{ fontSize: '15px' }} /> */}
          <GrNext style={{ fontSize: '25px', color: 'rgb(25, 69, 140)' }} />
        </div>
      </Link>
    </div>
  );
}
