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
      text: detailMode ? 'CHART TENDER VS PENUNJUKKAN LANGSUNG' : '',
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
        name: 'Tender vs Penunjukan Langsung',
        colorByPoint: true,
        data: [
          {
            name: 'Tender Terbatas',
            y: data?.PERSEN_TENDER ?? 0,
            paket: data?.TOTAL_PAKET_TENDER ?? 0,
          },
          {
            name: 'Penunjukan Langsung',
            y: data?.PERSEN_PENUNJUKAN_LANGSUNG ?? 0,
            paket: data?.TOTAL_PAKET_PENUNJUKAN_LANGSUNG ?? 0,
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
