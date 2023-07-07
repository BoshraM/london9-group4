import { CodeWarsCard } from "../component/CodeWarsCard";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* other dashboard components */}
      <CodeWarsCard rank="6kyu" progress={75} milestone="5kyu" Remain days="17 days" />
      {/* other dashboard components */}
    </div>
  );
};
