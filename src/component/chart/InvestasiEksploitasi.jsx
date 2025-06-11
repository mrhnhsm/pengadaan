import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d'; // Import modul 3D
import HighchartsReact from 'highcharts-react-official';
import '../../assets/css/chart.css';

// Inisialisasi modul 3D
// Highcharts3D(Highcharts);

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
        color: '#000',
        fontSize: detailMode ? '14px' : '12px',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        // Konfigurasi 3D untuk pie
        depth: detailMode ? 50 : 35, // Ketebalan pie 3D
        // Aktifkan dataLabels untuk menampilkan informasi pada setiap potongan
        dataLabels: {
          enabled: true,
          // Format label yang ditampilkan pada setiap potongan
          format:
            '<b>{point.name}</b><br>{point.percentage:.1f}%<br>Paket: {point.paket}',
          style: {
            color: '#000',
            fontSize: detailMode ? '12px' : '10px',
            fontWeight: 'bold',
            textOutline: '1px white', // Outline putih agar teks lebih jelas
          },
          distance: 30, // Jarak label dari pie
          connectorColor: '#000', // Warna garis penghubung
          connectorWidth: 1,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: 'Investasi VS Eksploitasi',
        colorByPoint: true,
        data: [
          {
            name: 'Investasi', // Perbaiki typo "Invetasi" menjadi "Investasi"
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
