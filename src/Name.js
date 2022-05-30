import React from "react";
import "./style.css";

export default class Name extends React.Component{

  constructor(props){
    super(props)
  }

    render(){
      return(
        <>
         <div>{`Hi  ${this.props.name} your age is ${this.props.age}`}</div>
        </>
      )
    }
}