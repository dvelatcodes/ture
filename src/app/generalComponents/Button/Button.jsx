import React from 'react'
import './styles.scss'
const Button = ({text, type, className, onClick, style}) => {
  return (
    <div type={type} className={className} onClick={onClick} style={style}>
      {text}
    </div>
  )
}

export default Button