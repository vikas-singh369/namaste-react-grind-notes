import UserClass from "./class/UserCalss";
import User from "./User";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent did mount called");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <div>
          <h1>About</h1>
          <p>This is a About Page</p>
          <UserClass name={"first child"} location={"Hydrabad"} />
        </div>
      </div>
    );
  }
}

export default About;
