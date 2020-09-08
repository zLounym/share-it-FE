import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { default as AvatarMui } from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
  },
}))

export const Avatar = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <AvatarMui className={classes.avatar} {...props}>
      {children}
    </AvatarMui>
  )
}
