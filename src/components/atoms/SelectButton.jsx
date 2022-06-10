import { Button } from '@mantine/core'

const SelectButton = (props) => {
  const { text, changeDisplay, display } = props
  const bgColor = display === text ? '#FE024E' : '#F585A7'

  return (
    <>
      <Button
        variant={(display === text ? 'filled' : 'subtle') || 'subtle'}
        radius="xl"
        onClick={() => changeDisplay(text)}
        size="sm"
        mr={6}
        sx={{ color: 'white', background: `${bgColor}`, '&:hover': { background: '#FE024E' } }}
      >
        {props.text}
      </Button>
    </>
  )
}

export default SelectButton
