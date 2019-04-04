import React, { Component } from 'react';
import './App.css';
import Old from './components/old-way/Old'
import Hooks from './components/hooks/Hooks'
class App extends Component {
  constructor(){
    super()
    this.state = {
      old: true,
      hooks: true
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          { this.state.old ? <Old name="Allan"/> : null
          }
          {
            this.state.hooks ? <Hooks name="Allan"/> : null
          }
          <button onClick={()=>this.setState((prev, pro)=>{return {old: !prev.old}})}>unmount old</button>
          <button onClick={()=>this.setState((prev, pro)=>{return {hooks: !prev.hooks}})}>unmount hooks</button>
        </header>
      </div>
    );
  }
}

export default App;
