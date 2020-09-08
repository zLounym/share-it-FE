import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

export const Search = ({ children, ...props }) => (
  <TextField
    variant="outlined"
    margin="normal"
    fullWidth
    id="search"
    label="Search..."
    name="search"
    autoComplete="search"
    autoFocus
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
    {...props}
  />
)
