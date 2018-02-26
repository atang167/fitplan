import React from 'react'

const ListItem = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.athleteName}</div>
      <img src={props.url}></img>
      <div>{props.femaleBooty? 'Female Booty' : 'Null'}</div>
      <div>{props.femaleBuild? 'Female Build' : 'Null'}</div>
      <div>{props.femaleShred? 'Female Shred' : 'Null'}</div>
      <div>{props.femaleTone? 'Female Tone' : 'Null'}</div>
      <div>{props.maleAthletic? 'Male Athletic' : 'Null'}</div>
      <div>{props.maleBulk? 'Male Bulk' : 'Null'}</div>
      <div>{props.maleShred? 'Male Shred' : 'Null'}</div>
  </div>
  )
}

export default ListItem;