import React, { Component } from 'react'
import List from './List'
import Detail from './Detail'

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div> 
        {/* <List />  */}
        <Detail />
      </div>
    )
  }
}

export default App; 