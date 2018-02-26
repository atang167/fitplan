import React from 'react'

const ListItem = props => (
  <div>
    <div>{props.name}</div>
    <div>{props.athleteName}</div>
    <img src={props.url}></img>
  </div>
);

export default ListItem;