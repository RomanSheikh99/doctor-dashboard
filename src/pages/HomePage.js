import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link to="/admin">
        {" "}
        <h1>Admin Dashboard</h1>
      </Link>
    </div>
  );
};

export default HomePage;
