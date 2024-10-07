import React from 'react'
import { ContenedorInput, StyledInput } from './styled'

export const Input = ({ width, marginTop, handleChange }) => {
  return (
    <ContenedorInput width={width} marginTop={marginTop}>
        <img src='/global/icons/LupaInput.svg' alt='lupa-input'/>
        <StyledInput type="text" placeholder='Ej: Felipe' onKeyDown={handleChange} />
    </ContenedorInput>
  )
}