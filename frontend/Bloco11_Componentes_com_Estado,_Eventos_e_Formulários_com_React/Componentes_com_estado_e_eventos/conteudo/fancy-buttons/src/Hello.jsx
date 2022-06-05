import React from 'react';

function hello(){
  console.log('Hello')
}

class Hello extends React.Component {
  render(){
    return <button onClick={hello}>Hello</button>
  }
}

export default Hello;
