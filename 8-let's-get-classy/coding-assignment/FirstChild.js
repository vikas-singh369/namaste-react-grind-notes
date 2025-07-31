import React from 'react'
class FirstChild extends React.Component{

  constructor (props){
    super(props);
    console.log("First contructor")


    this.state = {
      count: 1
    }
  }

// Q. What if there are multiple state variables?

/*
* In class-based components, multiple state variables are stored as properties of `this.state` object.

* To update them, we use `this.setState()`, and we can update one or more properties at a time.

* Important: `this.setState()` performs a shallow merge, meaning it only updates the specified properties and keeps the others unchanged.
*/


componentDidMount(){
  console.log("component First mount");
}

componentDidUpdate(){
  console.log("Component First update");
}

componentWillUnmount(){
  console.log("component First unmount");
}


  render(){
    console.log("First Render");
    const {
      name
    } = this.props;

    const {
      count
    } = this.state;
    return (
      <div>
        <h1>First Child {name}</h1>
        <p>Count:- {count} </p>

        <button onClick={()=>{
          this.setState({
            count: this.state.count + 1
          })
        }}>Increase-Count</button>
      </div>
    )
  }
}

export default FirstChild