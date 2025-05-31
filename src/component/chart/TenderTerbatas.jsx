import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../../assets/css/chart.css';
const TenderTerbatas = ({ detailMode = false, data }) => {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      plotBackgroundColor: 'transparent',
      height: detailMode ? 650 : 200,
    },
    title: {
      text: detailMode ? 'CHART TENDER TERBATAS (REAL VS RUPA)' : '',
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
        name: 'Tender Terbatas',
        colorByPoint: true,
        data: [
          {
            name: 'Real',
            y: data?.PERSEN_REAL ?? 0,
            paket: data?.TOTAL_PAKET_REAL ?? 0,
          },
          {
            name: 'Rupa',
            y: data?.PERSEN_RUPA ?? 0,
            paket: data?.TOTAL_PAKET_RUPA ?? 0,
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

export default TenderTerbatas;
