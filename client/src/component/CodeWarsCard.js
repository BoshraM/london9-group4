import React from "react";

const CodeWarsCard = ({ rank, progress, milestone }) => {
  return (
    <div className="codewars-card">
      <h2>CodeWars</h2>
      <p>Your Rank: {rank}</p>
      <p>Progress: {progress}%</p>
      <p>Next Milestone: {milestone}</p>
    </div>
  );
};

export default CodeWarsCard;
