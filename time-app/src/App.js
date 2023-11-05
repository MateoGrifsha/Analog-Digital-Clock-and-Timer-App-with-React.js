import AnalogClock from "./components/AnalogClock";
import DigitalClock from "./components/DigitalClock";

function App() {
  return (
    <div className="App">
      <h1>CLOCK</h1>
      <AnalogClock />
      <DigitalClock />
    </div>
  );
}

export default App;
