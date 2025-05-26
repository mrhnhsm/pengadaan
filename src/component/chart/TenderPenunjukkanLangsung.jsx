import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "../../assets/css/chart.css";
const InvestasiEksploitasi = ({ detailMode = false }) => {
const options = {
  chart: {
    type: "pie",
    backgroundColor: "transparent",
    plotBackgroundColor: "transparent",
    height: detailMode ? 650 : 550,
  },
  title: {
    text: detailMode ? "CHART TENDER VS PENUNJUKKAN LANGSUNG" : "",
    style: {
      color: "#333333",
      fontSize: detailMode ? "20px" : "6px",
    },
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    backgroundColor: "white",
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
  legend: {
    enabled: true,
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom",
    itemStyle: {
      color: "#000", // Warna teks legend
      fontSize: detailMode ? "14px" : "12px",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false, // Matikan label dalam chart
      },
      showInLegend: true, // Tampilkan data sebagai legenda
    },
  },
  series: [
    {
      name: "Anggaran",
      colorByPoint: true,
      data: [
        { name: "Real", y: 85.7 },
        { name: "Rupa", y: 14.3 },
      ],
    },
  ],
};


  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default InvestasiEksploitasi;
