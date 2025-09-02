import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Online Quiz App 🎉</h1>
      <p>Create quizzes, take quizzes, and track your scores.</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/quiz" className="btn btn-primary">Take a Quiz</Link>
        <Link to="/create" className="btn btn-outline" style={{ marginLeft: 10 }}>Create Quiz</Link>
      </div>
    </div>
  );
}
