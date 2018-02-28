import React from 'react'
import { Card, Image, Grid } from 'semantic-ui-react'

const PlanItem = (props) => {
  return (
    <Card
      image={props.url}
      key={props.id}
      header={props.name}
      meta={props.athleteName}
      style={{margin: 10, borderRadius: 0}}
    /> 
  )
}

export default PlanItem;