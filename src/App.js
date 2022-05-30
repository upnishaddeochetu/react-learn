import React from 'react';
import Name from './Name';
import Axios from 'axios';
import './style.css';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  callApi = () => {
    Axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => {
        console.log('DATA FROM API --->>>>>>>>>', res.data);
        this.setState({data: res.data});
        setTimeout(() => {
          console.log("DATA IN STATE ()()()()()())()()()", this.state.data)
        }, 3000)
      })
      .catch((err) => {
        console.error('error in calling api', err);
      });
  };


  componentDidMount(){
    this.callApi();
  }

  render() {
    let nameArray = [
      { name: 'Ajay', age: '31' },
      { name: 'Upnishad', age: '23' },
      { name: 'Vishal', age: '27' },
    ];
    let data = this.state.data
    return (
      <>
        {/* {nameArray.map((item) => {
          return <Name name={item.name} age={item.age} />;
        })} */}
        {/* <div onClick={() => this.callApi()}>Call API</div> */}
        { data && data.map((item) => {
          return(
            <div>{item.title}</div>
          )
        })

        }
      </>
    );
  }
}
