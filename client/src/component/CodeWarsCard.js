export const CodeWarsCard = ({ rank, progress, milestone }) => {
	return (
		<div className="codewars-card">
			<h1>CodeWars</h1>
			<p>Your Rank: {rank}</p>
      <h3>Milestone: Data Base week 3</h3>
			<p>You are on the track</p>
      <p>________________________</p>
      <h3>Next Milestone :final project</h3>
      <p>Remain days : 17 days</p>
			<p>Required rank: {milestone}</p>
      <p>_______________________</p>
      <p>you need 70 more  JS score in total</p>
      <p>Progress: {progress}%</p>
		</div>
	);
};
