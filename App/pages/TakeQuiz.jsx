import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScores } from "../hooks/useScores";

export default function TakeQuiz() {
  const navigate = useNavigate();
  const [scores, setScores] = useScores();
  const [answers, setAnswers] = useState({});
  
  // Example quiz
  const quiz = {
    title: "Sample Quiz",
    questions: [
      { id: 1, q: "Capital of France?", a: "Paris" },
      { id: 2, q: "2 + 2 = ?", a: "4" },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    quiz.questions.forEach((q) => {
      if (answers[q.id]?.trim().toLowerCase() === q.a.toLowerCase()) {
        score++;
      }
    });
    const result = {
      id: Date.now(),
      at: new Date().toISOString(),
      quizTitle: quiz.title,
      score,
      total: quiz.questions.length,
    };
    setScores([...scores, result]);
    navigate("/results", { state: { lastResultId: result.id } });
  };

  return (
    <div className="container">
      <h2>{quiz.title}</h2>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((q) => (
          <div key={q.id} style={{ marginBottom: "12px" }}>
            <label>{q.q}</label>
            <input
              type="text"
              value={answers[q.id] || ""}
              onChange={(e) =>
                setAnswers({ ...answers, [q.id]: e.target.value })
              }
              style={{ display: "block", padding: "8px", marginTop: "6px" }}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Submit Quiz
        </button>
      </form>
    </div>
  );
}
