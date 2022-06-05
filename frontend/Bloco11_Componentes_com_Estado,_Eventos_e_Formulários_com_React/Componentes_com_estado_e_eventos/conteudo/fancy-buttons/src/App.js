import './App.css';
import React from 'react';
import Hello from './Hello';
import UmTextoQualquer from './UmTextoQualquer';
import Oi from './Oi'
class App extends React.Component {
  render() {
    return <span>
      <UmTextoQualquer />
      <Hello />
      <Oi />
    </span>;
  }
}

export default App;
