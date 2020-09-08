import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Form } from '../component/Form'
import { Paper } from '../component/Paper'
import { Avatar } from '../component/Avatar'
import { Button } from '../component/Button'
import { Controller, useForm } from 'react-hook-form'
import id from 'uuid/v1'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import FaceIcon from '@material-ui/icons/Face'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import DoneIcon from '@material-ui/icons/Done'
import Chip from '@material-ui/core/Chip'
import { useAuth, useUsers } from '../store/context'
import { useHistory } from 'react-router-dom'

export const SignUp = () => {
  const { signUp } = useAuth()
  const { add } = useUsers()
  const history = useHistory()
  const [skills, updateSkills] = useState([])
  const { register, handleSubmit, control } = useForm()

  const addSkill = () => {
    updateSkills([...skills, { id: id() }])
  }

  const removeSkill = (index) => {
    updateSkills([...skills.slice(0, index), ...skills.slice(index + 1)])
  }

  const onSubmit = async (fromData) => {
    const { skills, ...rest } = fromData
    const parseSkill = Object.keys(skills || {}).map(
      (key) => fromData.skills[key]
    )
    const data = {
      skills: parseSkill,
      ...rest,
    }
    // TODO: REMOVE THIS
    add({...data, image: 'https://ca.slack-edge.com/T1ZJ2B8A2-UEHKE0FFU-d1fb6e23ad57-512'})
    console.log(data)

    const isAuthenticated = await signUp(data)
    if (isAuthenticated) {
      history.push('/deck')
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="interests"
                label="Your Interests"
                type="text"
                id="interests"
                inputRef={register}
              />
            </Grid>
            {skills.map((item, index) => (
              <Grid item xs={12} key={item.id}>
                <Grid container spacing={2}>
                  <Grid item xs={11}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Enter your skill"
                      name={`skills.${item.id}.name`}
                      inputRef={register}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton
                      aria-label="delete"
                      onClick={() => removeSkill(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    mt={2}
                    component={Controller}
                    type="number"
                    as={Rating}
                    size="large"
                    name={`skills.${item.id}.level`}
                    control={control}
                    defaultValue={0}
                  />
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Chip
                  size="medium"
                  icon={<FaceIcon />}
                  label="Add you Skill"
                  clickable
                  color="primary"
                  onClick={addSkill}
                  onDelete={() => {}}
                  deleteIcon={<DoneIcon />}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Yes, i want to be notified when i am matched."
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </Container>
  )
}
