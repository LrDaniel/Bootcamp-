import "./App.css";
import Car from "./Components/Car";
import Event from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";

const carinfo = { name: "Ford", model: "Mustang" };
function App() {
  return (
    <div className="App">
      <Car model={carinfo.model} />
      <Event />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
