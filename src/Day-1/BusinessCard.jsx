import React from 'react'

const BusinessCard = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <h2>{props.title}</h2>
        <h2>{props.email}</h2>
    </div>
  )
}

export default BusinessCard