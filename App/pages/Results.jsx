import { useScores } from "../hooks/useScores";
import { Link, useLocation } from "react-router-dom";

export default function Results() {
  const [scores] = useScores();
  const location = useLocation();
  const lastId = location.state?.lastResultId;

  return (
    <div className="container">
      <h2>Results</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Quiz</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.slice().reverse().map((r) => (
            <tr
              key={r.id}
              style={lastId === r.id ? { background: "#f0fdf4" } : undefined}
            >
              <td>{new Date(r.at).toLocaleString()}</td>
              <td>{r.quizTitle}</td>
              <td>
                {r.score} / {r.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
        <Link className="btn btn-outline" to="/quiz">
          Take Another Quiz
        </Link>
        <Link className="btn btn-primary" to="/create">
          Create New Quiz
        </Link>
      </div>
    </div>
  );
}
