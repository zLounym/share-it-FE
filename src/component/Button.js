import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { default as ButtonMui } from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export const Button = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <ButtonMui className={classes.submit} {...props}>
      {children}
    </ButtonMui>
  )
}
