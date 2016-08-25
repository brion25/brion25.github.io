export default function drawCharts(skills, CANVAS_ID_MD, CANVAS_ID_XS){
  let chartValues = Object.keys(skills).map(skill => skills[skill]),
      chartDataRadial = {
        labels : Object.keys(skills),
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
        labels : Object.keys(skills),
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
}
