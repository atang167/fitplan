import React, { Component } from 'react'
import axios from 'axios'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    }
  }

  componentDidMount() {
    axios.get('/api/detail', {
      params: {
        // planId: this.props.planId
        planId: 1018
      }
    })
  }

  render() {
    console.log(this.state.content, 'content');
    return (
      <div></div> 
    )
  }
}

export default Detail;