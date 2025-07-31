import React from "react";

class SecondChild extends React.Component{

  constructor(props){
    super(props);
    console.log("Second contructor")

    this.state = {
      count: 0
    }

  }


  componentDidMount(){
  console.log("component Second mount");

  this.interval = setInterval(()=>{
    console.log("Namste OG")
  },1000)
}

componentDidUpdate(){
  console.log("Component Second update");
}

componentWillUnmount(){
  console.log("component Second unmount");
  clearInterval(this.interval)
}


  render(){
    console.log("Second child render")
    return (
      <div>
        <h1>Second Child {this.props.name}</h1>
        <p> Count 2x : - {this.state.count}</p>

        <button onClick={ 
          ()=> {
            this.setState({
              count: this.state.count + 2
            })
          }
        }>Increse 2x</button>
      </div>
    )
  }
}

export default SecondChild;