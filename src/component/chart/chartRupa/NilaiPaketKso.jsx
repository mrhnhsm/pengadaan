import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d'; // Import modul 3D
import HighchartsReact from 'highcharts-react-official';
import '../../../assets/css/chart.css';

const NilaiPaketKso = ({ detailMode = false, data }) => {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      plotBackgroundColor: 'transparent',
      height: detailMode ? 650 : 250,
      // Konfigurasi 3D
      options3d: {
        enabled: true,
        alpha: 45, // Sudut kemiringan (0-90)
        beta: 0, // Rotasi horizontal
        depth: 50, // Kedalaman 3D
      },
    },
    title: {
      text: detailMode ? 'CHART NILAI PAKET KSO (REAL VS RUPA)' : '',
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
        depth: detailMode ? 50 : 20,
        dataLabels: {
          enabled: true,
          // Format label yang ditampilkan pada setiap potongan
          format: '<b>{point.name}</b><br>{point.percentage:.1f}%',
          style: {
            color: '#000',
            fontSize: detailMode ? '12px' : '10px',
            fontWeight: 'bold',
            textOutline: '1px white', // Outline putih agar teks lebih jelas
          },
          distance: 0, // Jarak label dari pie
          connectorColor: '#000', // Warna garis penghubung
          connectorWidth: 1,
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

export default NilaiPaketKso;
