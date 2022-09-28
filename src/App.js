import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import ProjectDisplay from './Pages/ProjectDisplay';
import Slideshow from './Pages/Slideshow';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ProjectDisplay />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/slideshow' element={<Slideshow />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
