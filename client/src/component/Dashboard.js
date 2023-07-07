import React from "react";
import CodeWarsCard from "/CodeWarsCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* other dashboard components */}
      <CodeWarsCard rank="6kyu" progress={75} milestone="5kyu" />
      {/* other dashboard components */}
    </div>
  );
};

export default Dashboard;