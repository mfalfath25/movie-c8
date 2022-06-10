import { SelectButton } from '../../atoms'

const DisplaySelection = ({ display, setDisplay }) => {
  return (
    <>
      <SelectButton
        text="Overview"
        display={display}
        changeDisplay={(display) => setDisplay(display)}
      />
      <SelectButton
        text="Characters"
        display={display}
        changeDisplay={(display) => setDisplay(display)}
      />
      <SelectButton
        text="Review"
        display={display}
        changeDisplay={(display) => setDisplay(display)}
      />
    </>
  )
}

export default DisplaySelection
