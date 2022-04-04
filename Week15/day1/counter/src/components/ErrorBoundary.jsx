import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo });
  }
  render() {
    console.log(this.state.error);

    if (this.state.error) {
      return (
        <>
          <h1>Error</h1>
        </>
      );
    }
    return <h1>{this.props.children}</h1>;
  }
}

export default ErrorBoundary;
