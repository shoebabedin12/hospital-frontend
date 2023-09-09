import React from "react";

const Home = () => {
  return (
    <>
      <div className="dashboard-result">
        <div className="dashboard-items">
          <h4>Number of Sent Reports</h4>
          <p>115</p>
        </div>
        <div className="dashboard-items">
          <h4>Number of Completed Reports</h4>
          <p>100</p>
        </div>
        <div className="dashboard-items">
          <h4>Number of Total Reports</h4>
          <p>200</p>
        </div>
        <div className="dashboard-items">
          <h4>Number of Registered Doctors</h4>
          <p>1115</p>
        </div>
        <div className="dashboard-items">
          <h4>Number of Requested Doctors</h4>
          <p>1000</p>
        </div>
        <div className="dashboard-items">
          <h4>Number of Total Doctors</h4>
          <p>2115</p>
        </div>
      </div>
    </>
  );
};

export default Home;
