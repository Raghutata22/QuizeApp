import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";
import Results from "./pages/Results";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/quiz" element={<TakeQuiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<Home />} /> {/* fallback */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
