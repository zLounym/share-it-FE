import React from 'react'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Paper } from '../component/Paper'
import { Form } from '../component/Form'
import { Avatar } from '../component/Avatar'
import { Button } from '../component/Button'
import { useForm } from 'react-hook-form'
import { useAuth } from '../store/context'
import { useObserver } from 'mobx-react'
import { useHistory } from 'react-router-dom'

export const Login = () => {
  const { logIn } = useAuth()
  const history = useHistory()
  const { handleSubmit, register } = useForm()

  const onSubmit = async (data) => {
    const isAuthenticated = await logIn(data)
    if (isAuthenticated) {
      history.push('/deck')
    }
  }

  return useObserver(() => (
    <Container component="main" maxWidth="xs">
      <Paper>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </Container>
  ))
}
