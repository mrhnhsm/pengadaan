import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../../../assets/css/chart.css';
const NilaiPaketRegII = ({ detailMode = false, data }) => {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      plotBackgroundColor: 'transparent',
      height: detailMode ? 650 : 200,
    },
    title: {
      text: detailMode ? 'NILAI PAKET REGIONAL 2 (REAL VS RUPA)' : '',
      style: {
        color: '#333333',
        fontSize: detailMode ? '20px' : '6px',
      },
    },
    tooltip: {
      pointFormat:
        '<b>{point.percentage:.1f}%</b> <br> Nilai: <b>{point.nilai}</b>',
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
        name: 'Anggaran',
        colorByPoint: true,
        data: [
          {
            name: 'Real',
            y: data?.PERSEN_NILAI_REAL_RUPA ?? 0,
            nilai: Math.floor(data?.TOTAL_NILAI_REALISASI ?? 0).toLocaleString(
              'id-ID'
            ),
          },
          {
            name: 'Rupa',
            y: data?.PERSEN_NILAI_RUPA_REAL ?? 0,
            nilai: Math.floor(data?.TOTAL_NILAI_RUPA ?? 0).toLocaleString(
              'id-ID'
            ),
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

export default NilaiPaketRegII;
