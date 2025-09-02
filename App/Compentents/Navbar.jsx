import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">Quiz App</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/create">Create</Link>
        <Link to="/results">Results</Link>
      </div>
    </nav>
  );
}
