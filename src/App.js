// import logo from './logo.svg';
import './App.css';

// import components here (Navigation, Footer, Projects)

import Header from './components/Header';
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Thanks from './components/Thanks';

function App() {
  return (
    <div>
    <Header />
    <Nav />
    <AboutMe />
    <Projects />
    <Thanks />
    <Footer />
    </div>
  );
}

export default App;
