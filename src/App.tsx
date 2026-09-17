import './App.css'
// import { siteConfig } from "./config/site";
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Home from "./pages/Home";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="projects" element={<div> Projects </div>}></Route>
        <Route path="about" element={<div>About Page</div>}></Route>
        <Route path="contact" element={<div>Contact Page</div>}></Route>
      </Route>
    </Routes>
  );
}

export default App
