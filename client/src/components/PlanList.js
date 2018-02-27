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

  render() {
    if (this.state.list) {
      return (
        <div>
        <Container>
        <Header as='h1' textAlign='center' style={{padding: 20}}>
          FIND YOUR FITPLAN
        </Header>
          <div>
            <Card.Group itemsPerRow={4}/>
            {this.state.list.map(p => {
              return (
                  <Link to={{pathname: `/plans/${p.slug}`, state: {planId: p.id}}}> 
                    <PlanItem 
                      name={p.name}
                      url={p.imageSmallUrl}
                      athleteName={p.athleteFirstName + ' ' + p.athleteLastName}
                      femaleBooty={p.goalFemaleBootyGains}
                      femaleBuild={p.goalFemaleBuildAndBurn}
                      femaleShred={p.goalFemaleShredFat}
                      femaleTone={p.goalFemaleToneAndTighten}
                      maleAthletic={p.goalMaleAthleteticPerformance}
                      maleBulk={p.goalMaleBulkUp}
                      maleShred={p.goalMaleShredFat}
                    /> 
                  </Link>
               )
             })}
             </Card.Group>
            </div>
        </Container>
        </div>
      )
    } else {
      return (
        <div>
          <Loader inverted>Loading</Loader>
        </div>
      )
    }
  }
}

export default PlanList; 