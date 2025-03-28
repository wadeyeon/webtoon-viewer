import { ThemeProvider, createTheme } from '@mui/material/styles';
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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
      <Fab />
    </ThemeProvider>
  );
}

export default App;
