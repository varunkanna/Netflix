import './App.css';
// import BgVideo from './components/BgVideo';
import Header from './components/Header';
import bgVideo from './asset/bg.mp4';
import Login from './pages/Login';

function App() {
  return (
    <div className=''>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Header /> */}
      {/* <BgVideo /> */}
      {/* <video src={bgVideo} autoPlay loop muted className='w-[100%] object-cover absolute top-0 left-0'/>
      <div className=''>
        hi
      </div> */}
      <Login />
    </div>
  );
}

export default App;
