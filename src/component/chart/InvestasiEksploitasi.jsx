import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../../assets/css/chart.css';
const InvestasiEksploitasi = ({ detailMode = false, data }) => {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      plotBackgroundColor: 'transparent',
      height: detailMode ? 650 : 550,
    },
    title: {
      text: detailMode ? 'CHART INVESTASI VS EKSPLOITASI' : '',
      style: {
        color: '#333333',
        fontSize: detailMode ? '20px' : '6px',
      },
    },
    tooltip: {
      pointFormat:
        '<b>{point.percentage:.1f}%</b> <br> Paket: <b>{point.paket}</b>',
      backgroundColor: 'white',
      style: {
        color: '#000000',
        fontSize: detailMode ? '14px' : '12px',
      },
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    legend: {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: {
        color: '#000', // Warna teks legend
        fontSize: detailMode ? '14px' : '12px',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false, // Matikan label dalam chart
        },
        showInLegend: true, // Tampilkan data sebagai legenda
      },
    },
    series: [
      {
        name: 'Invetasi VS Eksploitasi',
        colorByPoint: true,
        data: [
          {
            name: 'Invetasi',
            y: data?.PERSEN_INVESTASI ?? 0,
            paket: data?.TOTAL_PAKET_INVESTASI ?? 0,
          },
          {
            name: 'Eksploitasi',
            y: data?.PERSEN_EKSPLOITASI ?? 0,
            paket: data?.TOTAL_PAKET_EKSPLOITASI ?? 0,
          },
        ],
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default InvestasiEksploitasi;
