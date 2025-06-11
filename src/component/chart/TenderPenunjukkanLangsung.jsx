import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d'; // Import modul 3D
import HighchartsReact from 'highcharts-react-official';
import '../../assets/css/chart.css';

const InvestasiEksploitasi = ({ detailMode = false, data }) => {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      plotBackgroundColor: 'transparent',
      height: detailMode ? 650 : 550,
      // Konfigurasi 3D
      options3d: {
        enabled: true,
        alpha: 45, // Sudut kemiringan (0-90)
        beta: 0, // Rotasi horizontal
        depth: 50, // Kedalaman 3D
      },
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
        // Konfigurasi 3D untuk pie
        depth: detailMode ? 50 : 35, // Ketebalan pie 3D
        dataLabels: {
          enabled: true, // Matikan label dalam chart
          format:
            '<b>{point.name}</b><br>{point.percentage:.1f}%<br>Paket: {point.paket}',
          style: {
            color: '#000',
            fontSize: detailMode ? '12px' : '10px',
            fontWeight: 'bold',
            textOutline: '1px white', // Outline putih agar teks lebih jelas
          },
          distance: 1, // Jarak label dari pie
          connectorColor: '#000', // Warna garis penghubung
          connectorWidth: 1,
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
