import React from 'react';

function oi(){
  return console.log('oi');
}

class Oi extends React.Component {
  render(){
    return <button onClick={oi}>Oi</button>
  }
}

export default Oi;
