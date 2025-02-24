import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Benvenuto nella Home Page</h1>
      <Link to="/settings">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Vai alle Impostazioni</button>
      </Link>
    </div>
  );
};

export default HomePage;