import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}))

export const Form = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <form className={classes.form} {...props}>
      {children}
    </form>
  )
}
