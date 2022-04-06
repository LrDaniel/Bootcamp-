import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo });
  }
  render() {
    if (this.state.error) {
      return <h1>Bob fell on the server</h1>;
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
