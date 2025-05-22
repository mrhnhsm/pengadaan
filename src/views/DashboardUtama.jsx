import "../assets/css/card.css";
import "../assets/css/chart.css";
import TopCardGroup from "../component/card/Dashboard-Utama/TopCardGroup";
import CardIsi from "../component/card/Dashboard-Utama/CardIsi";

export default function DashboardUtama() {
 

  return (
    <div>
      {/* baris pertama */}
      <div style={{color:"black"}} >
        <h1>EFISIENSI PENGADAAN DAN PROCUREMENT EXCELLENCE</h1>
      </div>
      <TopCardGroup/>
      <CardIsi/>
      {/* baris kedua */}
      
      
    </div>
  );
}
