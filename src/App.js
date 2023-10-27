// css
import "./css/App.css";

// components
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <div className="profile-container">
        <Profile />
      </div>
      <div className="components-container">
        <div className="component" id="home">
          <Home />
        </div>
        <div className="component" id="about">
          <About />
        </div>
        <div className="component" id="education">
          <Education />
        </div>
        <div className="component" id="work">
          <Experience />
        </div>
        <div className="component" id="projects">
          <Projects />
        </div>
        <div className="component" id="contact">
          <ContactForm />
        </div>
      </div>
      <div className="nav-container">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
