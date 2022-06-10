import { useState } from 'react'
import { Rating } from '@mui/material'
import StarRateIcon from '@mui/icons-material/StarRate'

const StarsReview = () => {
  const [value, setValue] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [hover, setHover] = useState(-1)
  return (
    <>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover)
        }}
        emptyIcon={<StarRateIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </>
  )
}

export default StarsReview
