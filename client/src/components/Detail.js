import React, { Component } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import { Container, Image, Header, Grid, Divider, Button, Card } from 'semantic-ui-react'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athleteInfo: {
        name: null,
        img: null
      },
      workouts: [],
      workoutInfo: {
        name: null,
        days: null,
        daysPerWeek: null,
        description: null,
        img: null,
        goals: [
          {key: 'Booty Gains', val: null},
          {key: 'Build And Burn', val: null},
          {key: 'Shred Fat', val: null},
          {key: 'Tone and Tighten', val: null}, 
          {key: 'Athletic Performance', val: null},
          {key: 'Bulk Up', val: null},
          {key: 'Shred Fat', val: null}, 
        ]
      },
      videoUrl: null,
    }
    this.mapWorkouts = this.mapWorkouts.bind(this);
    this.mapGoals = this.mapGoals.bind(this);
  }

  componentDidMount() {
    axios.get('/api/detail/' + this.props.planId)
    .then((response) => {
      this.setState({
        athleteInfo: {
          name: response.data.athleteFirstName + ' ' + response.data.athleteLastName,
          img: response.data.athleteImageUrl
        },
        workouts: response.data.basicWorkouts,
        workoutInfo: {
          name: response.data.name,
          days: response.data.daysCount,
          daysPerWeek: response.data.daysPerWeek,
          description: response.data.description,
          img: response.data.video.screenshot,
          goals: [
            {key: 'Booty Gains', val: response.data.goalFemaleBootyGains},
            {key: 'Build and Burn', val: response.data.goalFemaleBuildAndBurn},
            {key: 'Shred Fat', val: response.data.goalFemaleShredFat},
            {key: 'Tone and Tighten', val: response.data.goalFemaleToneAndTighten}, 
            {key: 'Athletic Performance', val: response.data.goalMaleAthleteticPerformance},
            {key: 'Bulk Up', val: response.data.goalMaleBulkUp},
            {key: 'Shred Fat', val: response.data.goalMaleShredFat}, 
          ]
        },
        videoUrl: response.data.video.videoUrl480,
      });    
    })
    .catch(err => {
      console.log('error getting detail', err);
    })
  }

  mapGoals () {
    return this.state.workoutInfo.goals.map(g => {
      if (g.val === true)
      return (
        <div key={g.key}>{g.key}</div>
      )
    })
  }

  mapWorkouts() {
    return this.state.workouts.map(w => {
      return (
        <Card key={w.id} style={{padding: 10, borderRadius: 0}}>
          <Image src={w.imageUrl} />
          <Card.Header style={{fontWeight: 'bold'}}>{w.name}</Card.Header>
        </Card>
      )
    })
  }

  render() {
    const { athleteInfo, workouts, workoutInfo, videoUrl} = this.state;
    return (
      <div>
        <Container>
          <Image src={workoutInfo.img} style={{position: 'relative'}} fluid></Image>
          <Container textAlign='center' style={{backgroundColor: 'white', margin: -40, padding: 20, width: '75%', position: 'absolute', left: '12.5%'}}>
            <Header as='h1'>{athleteInfo.name}</Header> 
            <Header as='h2'>{workoutInfo.name}</Header> 
              <div>{workoutInfo.description}</div>
              <Grid columns={2} divided style={{marginTop: 20}}>
                <Grid.Column>
                  <Container textAlign='center'>
                    <Header as='h3'>{workoutInfo.days + ` days total`}</Header>
                    <Header as='h3'>{workoutInfo.daysPerWeek + ` days per week`}</Header>
                  </Container>
                </Grid.Column> 
                <Grid.Column>
                  <Container textAlign='center'>
                    <Header as='h3'>Goals</Header>
                    {this.mapGoals()}
                  </Container>
                </Grid.Column>
              </Grid>
              <ReactPlayer style={{display: "block", marginTop: 20}} height="100%" width="100%" url={videoUrl} controls={true}/>
            <Container style={{marginTop: 20}}>
              <Header as='h1'>Workouts</Header>
              <Card.Group itemsPerRow={4} style={{marginTop: 20}}>
                {this.mapWorkouts()}
              </Card.Group>
            </Container>
          </Container>
        </Container>
      </div>
    )
  }
}

export default Detail;