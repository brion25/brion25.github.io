import { connect } from 'react-redux';
import Chart from 'chart.js';

const CANVAS_ID = 'mySkillsCanvas';

export default Profile;

function Profile(React){
  const ProfileCmp =  (props) => {
    let profile = props.profile.rawProfile,
        chartValues = Object.keys(profile.skills).map(skill => profile.skills[skill]),
        chartData = {
          labels : Object.keys(profile.skills),
          datasets : [
            {
              label : 'My Skills',
              backgroundColor: "rgba(230, 243, 211, 0.5)",
              borderColor: "rgba(193, 208, 170, 0.8)",
              pointBackgroundColor: "rgba(193, 208, 170, 0.8)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(193, 208, 170, 0.8)",
              data: chartValues
            }
          ]
        };

    setTimeout(function () {
      const CTX = document.getElementById(CANVAS_ID);

      let mySkillsChart = new Chart(CTX,{
        type : 'radar',
        data : chartData,
        options : {
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
      });
    }, 0);
    return (
      <div className="profile">
        <h2 className="heading-big">{profile.name}</h2>
        <p className="profile-summary" dangerouslySetInnerHTML={{__html : profile.summary.toParagraphs()}}></p>
        <div className="my-skills">
          <canvas id={CANVAS_ID}></canvas>
        </div>
      </div>
    );
  }

  return connect()(ProfileCmp);
}
