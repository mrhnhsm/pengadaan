import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "../../assets/css/chart.css";
const TenderPenunjukkanLangsung = ({ detailMode = false }) => {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      plotBackgroundColor: "transparent",
      height: detailMode ? 650 : 600,
      width: detailMode ? 900 : 650,
    },
    title: {
      text: null, // atau "" juga boleh
    },

    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      backgroundColor: "#ffffff",
      style: {
        color: "#000000",
        fontSize: detailMode ? "14px" : "12px",
      },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          style: {
            color: "#ffffff",
            fontSize: detailMode ? "14px" : "12px",
          },
        },
      },
    },
    series: [
      {
        name: "Anggaran",
        colorByPoint: true,
        data: [
          { name: "Investasi", y: 50 },
          { name: "Eksploitasi", y: 40 },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TenderPenunjukkanLangsung;
