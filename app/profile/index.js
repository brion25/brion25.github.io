import { connect } from 'react-redux';
import Chart from 'chart.js';

import drawCharts from './draw-charts';
import avatar from './avatar';

const CANVAS_ID_MD = 'mySkillsCanvasMd';
const CANVAS_ID_XS = 'mySkillsCanvasXs';

export default Profile;

function Profile(React){
  const ProfileCmp =  (props) => {
    let profile = props.profile.rawProfile;

    drawCharts(profile.skills, CANVAS_ID_MD, CANVAS_ID_XS);

    return (
      <div className="profile">
        <h2 className="heading-big">{profile.name}</h2>
        <p className="profile-summary" dangerouslySetInnerHTML={{__html : profile.summary.toParagraphs()}}></p>
        <div className="my-skills-md">
          <canvas id={CANVAS_ID_MD}></canvas>
        </div>
        <div className="my-skills-xs">
          <canvas id={CANVAS_ID_XS}></canvas>
        </div>
      </div>
    );
  }

  return connect()(ProfileCmp);
}
