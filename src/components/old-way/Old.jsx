import React, { Component } from 'react'

export default class Old extends Component {
  state = {
    count: 1,
    didMount: "",
  }

  setCount(){
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
  }

  componentDidMount(){
    this.setState({
      didMount: "completado"
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      alert("Actualizado")
    }
  }
  
  componentWillUnmount(){
    alert("Desmontando")
  }

  render() {
    const {
      name
    } = this.props
    return (
      <React.Fragment>
        <p>Hello, Old {name} : {this.state.count} times</p>
        <button onClick={() => this.setCount()}>
          Click me
        </button>
        DidMount: {this.state.didMount}
      </React.Fragment>
    )
  }
}