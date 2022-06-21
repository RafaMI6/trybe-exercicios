import React from 'react';
import './caracteristicasDoBotão.css'

class Hello extends React.Component{
constructor(){
  super()
  this.state = {
    numeroDeClicks: 0
  }
  this.hello = this.hello.bind(this);
}

  hello(){
    this.setState((numeroAntigo, _props)=> ({
      numeroDeClicks: numeroAntigo.numeroDeClicks + 1
    }))
    console.log('Hello')
  }

  comportamento(number) {
    if (number % 2 === 0) {
      console.log('verde');
      return 'par';
    }
    console.log('branco');
    return 'normal';
  }
  render(){
    return <button onClick={this.hello}
    className={this.comportamento(this.state.numeroDeClicks)}>{this.state.numeroDeClicks}</button>
  }
}

export default Hello;
