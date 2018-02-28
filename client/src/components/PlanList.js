import React, { Component } from 'React'
import axios from 'axios'
import PlanItem from './PlanItem'
import { Link } from 'react-router-dom'
import { Grid, Header, Loader, Container, Menu, Card } from 'semantic-ui-react'

class PlanList extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      list: null
    }
    this.mapList = this.mapList.bind(this);
  }

  componentDidMount() {
    axios.get('/api/list')
    .then(response => {
      this.setState({list: response.data.result}); 
    })
    .catch(err => {
      console.log('err getting list', err);
    })
  }

  mapList() {
    this.state.list.map(p => {
      console.log('inside function', p)
      return (
        <Link to={{pathname: `/plans/${p.slug}`, state: {planId: p.id}}}> 
          <PlanItem 
            name={p.name}
            url={p.imageSmallUrl}
            athleteName={p.athleteFirstName + ' ' + p.athleteLastName}
            id={p.id}
            key={p.id}
          /> 
        </Link>
      )
    })
  }

  render() {
    if (!this.state.list) {
      return (
        <div>
        <Loader inverted>Loading</Loader>
      </div>
      )
    }
      return (
        <div>
          <Container>
            <Header as='h1' textAlign='center' style={{padding: 20}}>
              FIND YOUR FITPLAN
            </Header>
            <div>
              <Card.Group itemsPerRow={3} centered={true}>
                {this.mapList()}
              </Card.Group>
            </div>
          </Container>
        </div>
      )
  }
}

export default PlanList; 