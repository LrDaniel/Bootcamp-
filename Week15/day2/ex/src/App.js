import "./App.css";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import Color from "./components/Color";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <Color />
      </header>
    </div>
  );
}

export default App;
