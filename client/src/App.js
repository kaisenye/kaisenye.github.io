
// css
import './css/App.css';

// components
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div className='profile-container'>
        <Profile />
      </div>
      <div className='components-container'>
        <div className='section-home'>
          <Home />
        </div>
      </div>
      <div className='nav-container'>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
