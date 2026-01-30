import { useNavigate } from "react-router-dom";
import "./AdminArea.css";

export default function AdminArea() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); 
  };

  return (
    <div className="admin-container">
      <h2>Admin Area</h2>
      <p>Welcome, administrator! You can manage the system here.</p>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
