import React from "react";

// Creating a class-based component that extends React.Component
class UserClass extends React.Component {
  constructor(props) {
    super(props); // Must call super(props) to use `this.props` in constructor

    console.log(this.props.name + "child counstructor");

    // Initializing component's state (like internal data)
    this.state = {
      userInfo:{
        name: "ram",
        location: ""
      }
    };
  }

  async componentDidMount(){
    console.log(this.props.name + "Child componennt did mount")

const  data = await fetch(" https://api.github.com/users/vikas-singh369");

const json = await data.json();

this.setState({
  userInfo:json
});

  }

  componentDidUpdate(){
    console.log( this.props.name + "Child component update")
  }

  componentWillUnmount(){
    console.log( this.props.name + "Child component unmount")
  }

  // render() is a required method in class components — it returns JSX
  render() {
    console.log(this.props.name + "Child render called");

    // const { name, location } = this.props; now not taking data from props using api to learn



    const {
      name,
      location
    } = this.state.userInfo;
    return (
      <div>
        <h1>Name: {name}</h1>
        <h4>Location: {location}</h4>
      </div>
    );
  }
}

export default UserClass;
