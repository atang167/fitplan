import React from 'react'
import { Card, Image, Grid } from 'semantic-ui-react'

const PlanItem = (props) => {
  return (
      <Card
        image={props.url}
        header={props.name}
        meta={props.athleteName}
        style={{margin: 20}}
      /> 
      // {/* <div>{props.femaleBooty? 'Female Booty' : 'Null'}</div>
      // <div>{props.femaleBuild? 'Female Build' : 'Null'}</div>
      // <div>{props.femaleShred? 'Female Shred' : 'Null'}</div>
      // <div>{props.femaleTone? 'Female Tone' : 'Null'}</div>
      // <div>{props.maleAthletic? 'Male Athletic' : 'Null'}</div>
      // <div>{props.maleBulk? 'Male Bulk' : 'Null'}</div>
      // <div>{props.maleShred? 'Male Shred' : 'Null'}</div> */}
  )
}

export default PlanItem;