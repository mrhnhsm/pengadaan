import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "../../assets/css/chart.css";
const PenunjukkanLangsung = ({ detailMode = false }) => {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      plotBackgroundColor: "transparent",
      height: detailMode ? 650 : 250,
    },
    title: {
      text: detailMode ? "Distribusi Anggaran Detail" : "",
      style: {
        color: "#ffffff",
        fontSize: detailMode ? "20px" : "6px",
      },
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
          { name: "Eksploitasi", y: 60 },
          { name: "Eksploitasi", y: 10 },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PenunjukkanLangsung;
