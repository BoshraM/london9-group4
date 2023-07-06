import React from "react";

const CodeWarsCard = ({ rank, progress, milestone }) => {
  return (
    <div className="codewars-card">
      <h2>CodeWars Milestone</h2>
      <p>Your Rank: {rank}</p>
      <p>You are on the track</p>
      <p>Progress: {progress}%</p>
      <p>You need to catch: {milestone}</p>
    </div>
  );
};

export default CodeWarsCard;
