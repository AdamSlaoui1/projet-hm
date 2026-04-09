import { useState, useEffect } from "react";
import axios from "axios";
import "./DashBoard.css";
import Card from "./Component/Card";
 
const BACKEND_URL = "http://localhost:3001";
 
function Dashboard() {
  const [data, setData] = useState(
    { 
      temp: null,
      hum: null,
      soil: null,
    }
  );
  
  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, 60000);
    return () => clearInterval(id);
  }, []);
 
  const fetchData = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/data`);
      setData(res.data);
    } catch {
      console.log("Erreur")
    }
  };
 
  const ArroserPlante = async () => {
    
    try {
      await axios.post(`${BACKEND_URL}/api/pump`);
      console.log("Success")
    } catch {
      console.log("Erreur")
    }
  };
 
 
  return (
    <div className="navbar">
      <h1 className="dash">Dashboard Plante</h1>
 
      <div className="card-container">
  
        <Card
          className = "card1"
          image = "/temp.jpg"
          desc = "Température ambiante"
          donnee = {data.temp !== null ? `${data.temp} °C` : "-- °C"}

        />

        <Card
          className = "card2"
          image = "/air.jpg"
          desc = "Humidité de l'air"
          donnee = {data.hum !== null ? `${data.hum} %` : "-- %"}
        />

        <Card
          className = "card3"
          image = "ground.webp"
          desc = "Humidité du sol"
          donnee = {data.soil !== null ? `${data.soil} %` : "-- %"}

        />
      </div>
 
      <div className="text-center ">
        <button className="button" onClick={ArroserPlante} >
          <h4>Arroser la plante</h4>
        </button>
        {/*Message d'erreur dans la console */}
      </div>
    </div>
  );
}
 
export default Dashboard;