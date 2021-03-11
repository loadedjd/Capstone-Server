import React from 'react';
import './App.css';
import Home from './Home';
import { createMuiTheme, ThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffdb06',
    },
    secondary: {
      main: "#FFFFFF"
    }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />;
    </ThemeProvider>
)
}

export default App;
