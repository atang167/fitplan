import React, { Component } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'

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
    axios.get('/api/detail/' + this.props.planId)
    .then((response) => {
      console.log(response);
      this.setState({
        athleteInfo: {
          name: response.data.athleteFirstName + ' ' + response.data.athleteLastName,
          img: response.data.athleteImageUrl
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
    console.log(this.state, 'detail state');
    const { athleteInfo, workouts, workoutInfo, videoUrl } = this.state;
    return (
      <div>
        <div>{athleteInfo.name}</div> 
        <img src={athleteInfo.img}></img>
        <div>{workoutInfo.days}{workoutInfo.daysPerWeek}</div>
        <div>{workoutInfo.description}</div>
        <ReactPlayer url={videoUrl} controls={true}/>
      </div>
    )
  }
}

export default Detail;