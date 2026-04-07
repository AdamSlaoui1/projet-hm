import { useState, useEffect } from "react";
import axios from "axios";
import "./DashBoard.css";
 
const API_URL = "http://localhost:3000";
 
function Dashboard() {
  const [data, setData] = useState({ temp: null, hum: null, soil: null });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
 
  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, 60000);
    return () => clearInterval(id);
  }, []);
 
  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/data`);
      setData(res.data);
    } catch {
      setMessage("Erreur : impossible de récupérer les données.");
    }
  };
 
  const ArroserPlante = async () => {
    setLoading(true);
    setMessage("");
    try {
      await axios.post(`${API_URL}/api/pump`);
      setMessage("Suceess");
    } catch {
      setMessage("Erreur");
    } finally {
      setLoading(false);
    }
  };
 
  const TempAmb = () => (
    <div className="card1">
      <img src="/temp.jpg" alt="Température" />
      <h5>Température ambiante</h5>
      <p>{data.temp !== null ? `${data.temp} °C` : "-- °C"}</p>
    </div>
  );
 
  const HumiditeAmb = () => (
    <div className="card2">
      <img src="/air.jpg" alt="Humidité Air" />
      <h5>Humidité de l'air</h5>
      <p>{data.hum !== null ? `${data.hum} %` : "-- %"}</p>
    </div>
  );
 
  const HumiditeSol = () => (
    <div className="card3">
      <img src="ground.webp" alt="Humidité Sol" />
      <h5>Humidité du sol</h5>
      <p>{data.soil !== null ? `${data.soil} %` : "-- %"}</p>
    </div>
  );
 
  return (
    <div className="navbar">
      <h1>Dashboard Plante</h1>
 
      <div className="card-container">
        <TempAmb />
        <HumiditeAmb />
        <HumiditeSol />
      </div>
 
      <div className="text-center mt-4">
        <button className="btn btn-success btn-lg" onClick={ArroserPlante} disabled={loading}>
          {loading ? "Activation..." : "Arroser la plante"}
        </button>
        {message && <p className="mt-2">{message}</p>}
      </div>
    </div>
  );
}
 
export default Dashboard;