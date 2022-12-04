import React from 'react'
import { ButtonStyle } from './style'

const Button = ({ Text, onClick }) => {
  return (
    <ButtonStyle  onClick={onClick}>
        {Text}
    </ButtonStyle>
  )
}

export default Button