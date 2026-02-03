
import Home from "../pages/Home/Home"
import Projects from "../pages/Projects/Projects"
import Experience from "../pages/Experience/Experience";
import Contact from "../pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import MainLayout from "../components/layout/MainLayout";
interface Props {
    mode: "light" | "dark";
    setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const AppRoutes = ({mode, setMode}:Props) => {
  return (
<Layout mode={mode} setMode={setMode}>
   <Routes>
    <Route element={<MainLayout mode={mode} setMode={setMode} />}/>
    <Route path="/" element={<Home/> } />
     <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
     <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
   </Routes>
   </Layout>
  )
}

export default AppRoutes