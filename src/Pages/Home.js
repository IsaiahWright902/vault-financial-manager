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
          <Link to="/getStarted" style={{ textDecoration: "none" }}>
            <button className="btn btn--white">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
