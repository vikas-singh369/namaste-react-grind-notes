import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      count2: 2,
    };
  }
  render() {
    const { count, count2 } = this.state;

    const { name, location } = this.props;
    return (
      <div>
        <h1>Name: {name}</h1>
        <h4>Location: {location}</h4>
        <h4>Class Count 1 : {count}</h4>
        <h4>Class Count 2 : {count2}</h4>
      </div>
    );
  }
}

export default UserClass;
