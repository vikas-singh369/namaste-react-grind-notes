import React from "react";

// Creating a class-based component that extends React.Component
class UserClass extends React.Component {
  constructor(props) {
    console.log("child counstructor");

    super(props); // Must call super(props) to use `this.props` in constructor

    // Initializing component's state (like internal data)
    this.state = {
      count: 1,
      count2: 2,
    };
  }

  componentDidMount(){
    console.log("Child componennt did mount")
  }

  // render() is a required method in class components — it returns JSX
  render() {
    console.log("Child render called");

    const { count, count2 } = this.state;

    const { name, location } = this.props;

    return (
      <div>
        <h1>Name: {name}</h1>
        <h4>Location: {location}</h4>
        <h4>Class Count 1 : {count}</h4>
        <h4>Class Count 2 : {count2}</h4>
        <button 
          onClick={() => {
            this.setState({
              count: this.state.count + 1, //  Only 'count' gets updated, 'count2' stays the same
            });
          }}
        >
          Increse
        </button>

        <button 
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increse count2 
        </button>


      </div>
    );
  }
}

export default UserClass;
