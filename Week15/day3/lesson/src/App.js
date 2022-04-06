import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import Nav from "./components/Nav";
// import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";

class App extends Component {
  state = { page: "home" };

  navigateTo = (pageToNavigate) => {
    this.setState({ page: pageToNavigate });
  };
  render() {
    switch (this.state.page) {
      case "home":
        return (
          <>
            <button onClick={() => this.navigateTo("home")}>Home</button>
            <button onClick={() => this.navigateTo("about")}>About</button>
            <button onClick={() => this.navigateTo("contact")}>Contact</button>

            <Home />
          </>
        );
      case "about":
        return (
          <>
            <button onClick={() => this.navigateTo("home")}>Home</button>
            <button onClick={() => this.navigateTo("about")}>About</button>
            <button onClick={() => this.navigateTo("contact")}>Contact</button>
            <About />
          </>
        );
      case "contact":
        return (
          <>
            <button onClick={() => this.navigateTo("home")}>Home</button>
            <button onClick={() => this.navigateTo("about")}>About</button>
            <button onClick={() => this.navigateTo("contact")}>Contact</button>
            <Contact />
          </>
        );
      default:
        <>
          <Home />
        </>;
    }
    return (
      <>
        <Home />
        <About />
        <Contact />
      </>
    );
  }
}

export default App;
// function App() {
//   return (
//     <>
//       {/* <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes> */}

//       <Home />
//       <About />
//       <Contact />
//     </>
//   );
// }

// export default App;
