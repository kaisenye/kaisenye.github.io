// css
import "./css/App.css";

// components
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <div className="profile-container">
        <Profile />
      </div>
      <div className="components-container">
        <div className="component">
          <Home />
        </div>
        <div className="component">
          <About />
        </div>
        <div className="component">
          <Experience />
        </div>
      </div>
      <div className="nav-container">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
