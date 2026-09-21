import './App.css'
// import { siteConfig } from "./config/site";
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="projects/:slug" element={<ProjectDetails />}></Route>
      </Route>
    </Routes>
  );
}

export default App
