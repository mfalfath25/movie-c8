import React from 'react'
import { SelectButton } from '../../atoms'

const DisplaySelection = ({ display, setDisplay }) => {
  return (
    <>
      <SelectButton text="Overview" changeDisplay={(display) => setDisplay(display)} />
      <SelectButton text="Characters" changeDisplay={(display) => setDisplay(display)} />
      <SelectButton text="Review" value="review" changeDisplay={(display) => setDisplay(display)} />
    </>
  )
}

export default DisplaySelection
