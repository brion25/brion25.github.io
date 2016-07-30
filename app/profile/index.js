import { connect } from 'react-redux';
import Chart from 'chart.js';

const CANVAS_ID_MD = 'mySkillsCanvasMd';
const CANVAS_ID_XS = 'mySkillsCanvasXs';

export default Profile;

function Profile(React){
  const ProfileCmp =  (props) => {
    let profile = props.profile.rawProfile,
        chartValues = Object.keys(profile.skills).map(skill => profile.skills[skill]),
        chartDataRadial = {
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
        },
        chartDataBar = {
          labels : Object.keys(profile.skills),
          datasets : [
            {
              label : 'My Skills',
              backgroundColor: "rgba(193, 208, 170, 1)",
              data: chartValues
            }
          ]
        };

    setTimeout(function () {
      const CTX_MD = document.getElementById(CANVAS_ID_MD);
      const CTX_XS = document.getElementById(CANVAS_ID_XS);

      let mySkillsChartMd = new Chart(CTX_MD,{
        type : 'radar',
        data : chartDataRadial,
        options : {
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
      });

      let mySkillsChartXs = new Chart(CTX_XS, {
          type: 'horizontalBar',
          data: chartDataBar,
          options: {
            responsive: true,
            maintainAspectRatio: false,
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
