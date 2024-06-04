import React, {useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';  
import Preloader from './Components/Preloader';
import ScrollTopBtn from './Components/ScrollTopBtn';
import ScrumPage from './pages/ScrumPage';
import Home from './pages/Home';
import JoinUs from './pages/JoinUs';
import TeamPage from './pages/TeamPage';
import InterviewPage from './pages/InterviewPage';
import CommunityPage from './pages/CommunityPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Preloader/>
  } else {
    return (
    <>
      <ScrollTopBtn/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/scrum" element={<ScrumPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/join-us" element={<JoinUs />} />
      </Routes>
    </>
    )
  }
}

export default App;
