import React from 'react'

class UserClass extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

    const {
      name,
      location
    } = this.props
    return (
      <div>
      <h1>Name: {name}</h1>
      <h4>Location: {location}</h4>
    </div>
    )
  }
}

export default UserClass;