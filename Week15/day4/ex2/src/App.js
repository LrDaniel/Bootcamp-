import "./App.css";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {
  return (
    <div>
      <h1>This is a title</h1>
      <PostList />
      <Example1 />
      <Example2 />
      <Example3 />
    </div>
  );
}

export default App;
