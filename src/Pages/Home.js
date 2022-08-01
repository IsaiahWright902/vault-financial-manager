import "../assets/scss/pages/home.scss";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="container-fluid">
        <div className="hero-text-alignment">
          <h1 className="home-heading">Vault</h1>
          <p className="hero-text">
            A financial tool to help manage your money & save for the future by
            setting goals.
          </p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <button className="btn btn--white">Open Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
