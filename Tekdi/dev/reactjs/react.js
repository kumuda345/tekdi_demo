import React from 'react';

class SimpleReactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Simple React App</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p>Hello, {this.state.name}!</p>
      </div>
    );
  }
}

export default SimpleReactApp;
