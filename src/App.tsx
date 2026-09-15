import './App.css'
import { siteConfig } from "./config/site";
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import ProjectCard from './components/projectcard';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home Page</div>}></Route>
        <Route path="projects" element={<ProjectCard project={siteConfig.projects[0]} />}></Route>
        <Route path="about" element={<div>About Page</div>}></Route>
        <Route path="contact" element={<div>Contact Page</div>}></Route>
      </Route>
    </Routes>
  );
}

export default App
