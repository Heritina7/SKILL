import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import './App.css';
import Competence from "./pages/Competence";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Experience from "./pages/Experience";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Formation from "./pages/Formation";
import Activite from "./pages/Activite";
import { AiOutlinePaperClip } from "react-icons/ai"; 
function App() {
  return (
    
    <Router>
      <Navbar />
      <div className='flex flex-col min-h-screen'>
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Competence" element={<Competence/>}/>
          <Route path="/Experience" element={<Experience/>}/>
          <Route path="/Formation" element={<Formation/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Activite" element={<Activite/>}/>
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
