import { Rating } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import StarRateIcon from '@mui/icons-material/StarRate'
// import StarBorderIcon from '@mui/icons-material/StarBorder'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  emptyStar: {
    color: 'white',
  },
}))

const StarsDisplay = ({ rating }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Rating
        defaultValue={3.5}
        value={rating}
        precision={0.5}
        readOnly
        emptyIcon={<StarRateIcon fontSize="inherit" className={classes.emptyStar} />}
      />
    </div>
  )
}
export default StarsDisplay
