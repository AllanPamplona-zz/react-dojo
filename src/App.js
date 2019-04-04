import React, { Component } from 'react';
import './App.css';
import Old from './components/old-way/Old'
import Hooks from './components/hooks/Hooks'
import Message from './components/redux/Message'
import Control from './components/redux/Control'

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
          <div class="parent">
            <div class="column">
              { this.state.old ? <Old name="Allan"/> : null
              }
              <button onClick={()=>this.setState((prev, pro)=>{return {old: !prev.old}})}>unmount old</button>
            </div>
            <div class="column">
              {
                this.state.hooks ? <Hooks name="Allan"/> : null
              }
             <button onClick={()=>this.setState((prev, pro)=>{return {hooks: !prev.hooks}})}>unmount hooks</button>
            </div>
              <div class="column">
                <Message />
                <Control />
              </div>
          </div>
         </header>
      </div>
    );
  }
}

export default App;
