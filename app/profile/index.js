import { connect } from 'react-redux';

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
        <div className="my-qualifications">
          <div className="my-previous-jobs">
            <h2 className="my-previous-jobs-header">Previous Experience</h2>
            <ul>
              {profile.previousJobs.map(_renderPreviousJobs)}
            </ul>
          </div>
          <div className="my-skills-md">
            <canvas id={CANVAS_ID_MD}></canvas>
          </div>
          <div className="my-skills-xs">
            <canvas id={CANVAS_ID_XS}></canvas>
          </div>
        </div>
      </div>
    );
  }

  function _renderPreviousJobs(job, i){
    return (
      <li className="my-previous-jobs-job" key={'job' + i}>
        <div>
          <h3>{job.title} <small> at {job.company.name}</small></h3>
          <small>{job.date.start} - {job.date.end}</small>
        </div>
      </li>
    )
  }

  return connect()(ProfileCmp);
}
