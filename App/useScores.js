import { useState, useEffect } from "react";

export function useScores() {
  const [scores, setScores] = useState(() => {
    const saved = localStorage.getItem("quiz-scores");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("quiz-scores", JSON.stringify(scores));
  }, [scores]);

  return [scores, setScores];
}
