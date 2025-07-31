import React from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";

class Parent extends React.Component{

  constructor(){
    super();
    console.log("Parent Constructor");
  }


  componentDidMount(){
  console.log("parent component mount");
}

componentDidUpdate(){
  console.log("Parnet Component update");
}

componentWillUnmount(){
  console.log("parnet component unmount");
}



  render(){
    console.log("Parent Render");
    return (
      <div>
        <h1>Parent Component</h1>
        <FirstChild name = {"First Class"} />
        <SecondChild  name = {"Second Class"}/>
      </div>
    )
  }
}

export default Parent