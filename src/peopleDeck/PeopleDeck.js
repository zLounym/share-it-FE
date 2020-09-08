import React, { useEffect, useState } from 'react'
import { PeopleCard } from '../component/PeopleCard'
import { Search } from '../component/Search'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { useUsers } from '../store/context'
import { useObserver } from 'mobx-react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const PeopleDeck = () => {
  const { userList } = useUsers()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = React.useState([])
  const [open, setOpen] = useState(false)

  const handleClickSnackBar = () => {
    setOpen(true)
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const results = userList.filter((person) => {
      const skillsText = person.skills.map((skill) => skill.name)
      const searchText = []
      searchText.push(person.firstname)
      searchText.push(person.lastName)
      searchText.push(person.interests)
      searchText.push(person.email)
      searchText.push(skillsText)
      return searchText.join(' ').toLowerCase().includes(searchTerm)
    })
    setSearchResults(results)
  }, [searchTerm])

  return useObserver(() => (
    <Container>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Search value={searchTerm} onChange={handleChange} />
        </Grid>
      </Grid>
      <Box component={Grid} container spacing={4} mt={3}>
        {searchResults.map((item) => (
          <Grid item xs={12} md={3}>
            <PeopleCard {...item} handleClickSnackBar={handleClickSnackBar} />
          </Grid>
        ))}
      </Box>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
            Congratulations we have sent an invite to both of you too meetup :)
        </Alert>
      </Snackbar>
    </Container>
  ))
}
