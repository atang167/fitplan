import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Plans from './Plans'
import { Grid, Row, Col } from 'react-flexbox-grid'

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
      <Grid fluid>
        <Switch>
          <Route path='/plans' component={Plans}/>
        </Switch>
      </Grid>
    )
  }
}

export default App; 