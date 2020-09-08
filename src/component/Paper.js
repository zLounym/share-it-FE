import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export const Paper = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <div className={classes.paper} {...props}>
      {children}
    </div>
  )
}
