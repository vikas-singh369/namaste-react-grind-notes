import UserClass from "./class/UserCalss";
import User from "./User";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Did Mount Called");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="p-6">
        {/* One liner for clarity */}
        <p className="text-center text-sm text-gray-500 mb-4">
          ⚡ This route is only created to demonstrate how Class-based Components work ⚡
        </p>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-2">About</h1>
          <p className="mb-4 text-gray-700">This component fetches data from my GitHub and uses code splitting.</p>

          {/* Using Child Component */}
          <UserClass name={"First Child"} location={"Hyderabad"} />
        </div>
      </div>
    );
  }
}

export default About;
