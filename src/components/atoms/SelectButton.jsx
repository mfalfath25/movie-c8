import { Button } from '@mantine/core'

const SelectButton = (props) => {
  const { text, type, changeType, display, changeDisplay } = props

  const handleColorChange = (props) => {
    let bgColorType = type === '' || type === text ? '#FE024E' : '#F585A7'
    let bgColorDisplay = display === text ? '#FE024E' : '#F585A7'

    let bgColor = props.type ? bgColorType : bgColorDisplay
    return bgColor
  }

  return (
    <>
      <Button
        variant={(display || type === text ? 'filled' : 'subtle') || 'subtle'}
        radius="xl"
        onClick={
          changeDisplay ? () => changeDisplay(text) : changeType ? () => changeType(text) : () => {}
        }
        size="sm"
        mr={6}
        sx={{
          color: 'white',
          background: `${handleColorChange(props)}`,
          '&:hover': { background: '#FE024E' },
        }}
      >
        {props.text}
      </Button>
    </>
  )
}

export default SelectButton
