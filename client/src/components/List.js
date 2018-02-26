import React, { Component } from 'React'
import axios from 'axios'
import ListItem from './ListItem'

class List extends Component {
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
          {this.state.list.map(item => {
            return (
              <ListItem 
              name={item.name}
              url={item.imageSmallUrl}
              athleteName={item.athleteFirstName + ' ' + item.athleteLastName}
              femaleBooty={item.goalFemaleBootyGains}
              femaleBuild={item.goalFemaleBuildAndBurn}
              femaleShred={item.goalFemaleShredFat}
              femaleTone={item.goalFemaleToneAndTighten}
              maleAthletic={item.goalMaleAthleteticPerformance}
              maleBulk={item.goalMaleBulkUp}
              maleShred={item.goalMaleShredFat}
            /> 
            )
          })}
        </div> 
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default List; 