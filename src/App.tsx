import "./App.css";
import Counter from "./Components/Counter";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
