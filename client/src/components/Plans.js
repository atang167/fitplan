import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PlanList from './PlanList'
import Detail from './Detail'

const Plans = () => (
    <Switch>
      <Route exact path='/plans' component={PlanList}/>
      <Route path='/plans/:slug' render={(props) => (
        <Detail planId={props.location.state.planId}/>
      )}/>
    </Switch>
)

export default Plans; 

