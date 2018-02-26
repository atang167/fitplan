import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Plans from './Plans'

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      // <div> 
      //   {/* <List />  */}
      //   <Detail />
      // </div>
      <Switch>
        <Route path='/plans' component={Plans}/>
      </Switch>
    )
  }
}

export default App; 