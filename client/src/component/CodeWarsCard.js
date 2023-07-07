export const CodeWarsCard = ({ rank, progress, milestone }) => {
	return (
		<div className="codewars-card">
			<h1>CodeWars</h1>
			<h4>Your Rank: {rank}</h4>
      <h3>Milestone: Data Base week 3</h3>
			<h5>You are on the track</h5>
      <p>________________________</p>
      <h3>Next Milestone :final project</h3>
      <h4>Remain days : 17 days</h4>
			<h4>Required rank: {milestone}</h4>
      <p>_______________________</p>
      <h5>you need 70 more  JS score in total</h5>
      <h4>Progress: {progress}%</h4>
		</div>
	);
};
