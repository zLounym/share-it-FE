import { createMuiTheme } from '@material-ui/core/styles'

export const muiTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1600,
    },
  },
  spacing: 8,
})
