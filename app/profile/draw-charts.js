import Chart from 'chart.js';

Chart.defaults.global.defaultFontColor = '#EDEDED';

export default function drawCharts(skills, CANVAS_ID_MD, CANVAS_ID_XS){
  let chartValues = Object.keys(skills).map(skill => skills[skill]),
      chartDataRadial = {
        labels : Object.keys(skills),
        datasets : [
          {
            label : 'My Skills',
            backgroundColor: "rgba(237, 237, 237,0.3)",
            borderColor: "#62D4FF",
            pointBackgroundColor: "#62D4FF",
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
            backgroundColor: "#EDEDED",
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
        responsive: true,
        maintainAspectRatio: false,
          scale: {
            ticks: {
              beginAtZero: true,
              backdropColor : '#00131A'
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
          scales: {
            xAxes: [{
              gridLines: {
                display: true
              },
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
    });
  }, 0);
}
