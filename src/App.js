import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Branding from './pages/Branding';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Articles from './components/Articles';
import ProjectDetail from './components/ProjectDetail';
import AllProjects from './components/AllProjects';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <Router>
      <div className="lg:container lg:mx-auto min-h-screen bg-white">
        <Navbar />
        <main>
         <Routes>
         
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            <Route path="/allprojects" element={<AllProjects />} />
            </Routes> 
          
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
