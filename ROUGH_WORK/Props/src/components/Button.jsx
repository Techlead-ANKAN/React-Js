import React from 'react'

function Button(props) {

    const {label, bgColor} = props;

  return (
    <button style={{backgroundColor: props.bgColor}}>
        <span>{props.label}</span>
    </button>
  )
}

export default Button