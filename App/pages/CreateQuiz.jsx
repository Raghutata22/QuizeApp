import { useState } from "react";

export default function CreateQuiz() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([{ q: "", a: "" }]);

  const handleAdd = () => {
    setQuestions([...questions, { q: "", a: "" }]);
  };

  return (
    <div className="container">
      <h2>Create New Quiz</h2>
      <form>
        <input
          type="text"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: "block", margin: "10px 0", padding: "8px" }}
        />
        {questions.map((q, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder={`Question ${i + 1}`}
              value={q.q}
              onChange={(e) => {
                const updated = [...questions];
                updated[i].q = e.target.value;
                setQuestions(updated);
              }}
              style={{ padding: "8px", marginRight: "8px" }}
            />
            <input
              type="text"
              placeholder="Answer"
              value={q.a}
              onChange={(e) => {
                const updated = [...questions];
                updated[i].a = e.target.value;
                setQuestions(updated);
              }}
              style={{ padding: "8px" }}
            />
          </div>
        ))}
        <button type="button" className="btn btn-outline" onClick={handleAdd}>
          + Add Question
        </button>
        <button type="submit" className="btn btn-primary" style={{ marginLeft: 10 }}>
          Save Quiz
        </button>
      </form>
    </div>
  );
}
