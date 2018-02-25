import React, { Component } from 'React'
import axios from 'axios'

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
      console.log(this.state.list, 'state');
    })
    .catch(err => {
      console.log('err getting list', err);
    })
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => {
          <ListItem /> 
        })}
      </div> 
    )
  }
}

export default List; 