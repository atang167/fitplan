import React, { Component } from 'react'
import axios from 'axios'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athleteInfo: {
        athleteName: null,
        athleteImage: null
      },
      workouts: [],
      workoutInfo: {
        days: null,
        daysPerWeek: null,
        description: null,
        goals: [
          {femaleBooty: null},
          {femaleBuild: null},
          {femaleShred: null},
          {femaleTone: null}, 
          {maleAthletic: null},
          {maleBulk: null},
          {maleShred: null}, 
        ]
      },
      videoUrl: null,
    }
  }

  componentDidMount() {
    // axios.get('/api/detail/' + this.props.planId)
    axios.get('/api/detail/' + 1018)
    .then((response) => {
      this.setState({
        athleteInfo: {
          athleteName: response.data.athleteFirstName + ' ' + response.data.athleteLastName,
          athleteImage: response.data.athleteImageUrl
        },
        workouts: response.data.basicWorkouts,
        workoutInfo: {
          days: response.data.daysCount,
          daysPerWeek: response.data.daysPerWeek,
          description: response.data.description,
          goals: [
            {femaleBooty: response.data.goalFemaleBootyGains},
            {femaleBuild: response.data.goalFemaleBuildAndBurn},
            {femaleShred: response.data.goalFemaleShredFat},
            {femaleTone: response.data.goalFemaleToneAndTighten}, 
            {maleAthletic: response.data.goalMaleAthleteticPerformance},
            {maleBulk: response.data.goalMaleBulkUp},
            {maleShred: response.data.goalMaleShredFat}, 
          ]
        },
        videoUrl: response.data.video.videoUrl480,
      });
    })
    .catch(err => {
      console.log('error getting detail', err);
    })
  }

  render() {
    console.log(this.state, 'state');
    return (
      <div>{this.state.athleteInfo.athleteName}</div> 
    )
  }
}

export default Detail;