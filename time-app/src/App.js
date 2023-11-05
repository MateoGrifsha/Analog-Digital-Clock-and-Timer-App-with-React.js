import AnalogClock from "./components/AnalogClock";
import DigitalClock from "./components/DigitalClock";
import Navbar from "./components/Navbar";
import Pomodoro from "./components/Pomodoro";
import './index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
            <div className="content">
              <Routes>
                <Route exact path="/" element= {
                          <div className="clocks">
                            <h1>CLOCK</h1>
                            <AnalogClock />
                            <DigitalClock />
                        </div>
                }/>
                <Route path="/pomodoro" element={<Pomodoro />} />
              </Routes>
            </div>
      </div>
    </Router>
  );
}

export default App;
