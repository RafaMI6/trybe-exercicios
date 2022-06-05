import React from 'react';

class Hello extends React.Component{
constructor(){
  super()
  this.hello = this.hello.bind(this);
}

  hello(){
    console.log(this);
    console.log('Hello')
  }
  render(){
    return <button onClick={this.hello}>Hello</button>
  }
}

export default Hello;
