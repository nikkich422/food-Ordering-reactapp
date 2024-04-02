import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    return (
      <div>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Count2: {count2}</h2>
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h4>Instagram: @royal__nikk_</h4>
      </div>
    );
  }
}

export default UserClass;
