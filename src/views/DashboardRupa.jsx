import TopCardGroupRupa from '../component/card/Dashboard-Utama/TopCardGroupRupa';
import CardRupa from '../component/card/Dashboard-Utama/CardRupa';

export default function DashboardRupa() {
  return (
    <div>
      <div>
        <h1 style={{ color: 'black' }}>RATA-RATA PENYELESAIAN PAKET </h1>
      </div>
      <TopCardGroupRupa />
      <CardRupa />
    </div>
  );
}
