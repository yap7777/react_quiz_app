import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Quiz from "./Quiz.jsx";
import Results from "./Results.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/quiz/:nickname" element={<Quiz />}></Route>
        <Route path="/results/:nickname" element={<Results />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;