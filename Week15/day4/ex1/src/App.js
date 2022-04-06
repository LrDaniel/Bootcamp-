import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./components/ErrorBoundary";
import NavLink from "./components/NavLink";

class App extends Component {
  state = {};

  render() {
    const HomeScreen = () => <h3>Home</h3>;

    const ProfileScreen = () => <h3>Profile</h3>;

    const ShopScreen = () => {
      throw new Error("Error during render");
    };

    return (
      <>
        <Router>
          <NavLink />

          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <HomeScreen />
                </ErrorBoundary>
              }
            />
            <Route
              path="/profile"
              element={
                <ErrorBoundary>
                  <ProfileScreen />
                </ErrorBoundary>
              }
            />
            <Route
              path="/shop"
              element={
                <ErrorBoundary>
                  <ShopScreen />
                </ErrorBoundary>
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
