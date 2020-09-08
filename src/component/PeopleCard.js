import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export const PeopleCard = ({
  firstname,
  lastName,
  skills,
  interests,
  email,
  image,
  handleClickSnackBar,
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="person" className={classes.avatar}>
            {firstname && firstname.charAt(0).toLocaleUpperCase()}
            {lastName && lastName.charAt(0).toLocaleUpperCase()}
          </Avatar>
        }
        title={`${firstname} ${lastName}`}
        subheader={email}
      />
      <CardMedia className={classes.media} image={image} />
      <Box component={CardContent} pb={0}>
        <Typography variant="h6">Skills</Typography>
        {skills.map((item, index) => (
          <Box key={index} mt={1}>
            <Typography variant="body1" color="textSecondary">
              {item.name}
            </Typography>
            <Box
              component={Rating}
              name="half-rating-read"
              defaultValue={item.level}
              readOnly
            />
          </Box>
        ))}
      </Box>
      <Box component={CardActions} disableSpacing pl={2}>
        <Button size="small" color="primary" onClick={handleClickSnackBar}>
          Match me
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box component={CardContent} pt={0}>
          <Typography variant="h6">Interests:</Typography>
          <Typography variant="body1" color="textSecondary">
            {interests}
          </Typography>
        </Box>
      </Collapse>
    </Card>
  )
}
