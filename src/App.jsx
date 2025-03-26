import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet } from 'react-router';

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
    </ThemeProvider>
  );
}

export default App;
