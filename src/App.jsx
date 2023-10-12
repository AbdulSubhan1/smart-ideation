import { Route, Routes } from "react-router";
import "./App.scss";
import Home from "./pages/Home";
import Project from "./pages/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
