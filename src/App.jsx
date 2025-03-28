import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router';
import Fab from './Components/Fab';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f6d015',
    },
    secondary: {
      main: '#153af6',
    },
  },
  colorSchemes: {
    dark: true,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
      <Fab />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
