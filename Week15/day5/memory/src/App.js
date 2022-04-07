import "./App.css";
import "tachyons";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Score from "./components/Score";
import Rule from "./components/Rule";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Header />
      <Score />
      <Rule />
      <Cards />
    </div>
  );
}

export default App;
