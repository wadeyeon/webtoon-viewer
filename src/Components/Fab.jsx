import React from 'react';
import { useNavigate } from 'react-router';
import { useColorScheme } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const actions = [
  {
    icon: <Brightness4Icon />,
    name: 'mode',
  },
  {
    icon: <HomeIcon />,
    name: 'home',
  },
];

export default function Fab() {
  const navigate = useNavigate();
  const { mode, setMode } = useColorScheme();

  return (
    <SpeedDial
      ariaLabel='SpeedDial basic example'
      sx={{ position: 'fixed', bottom: 16, left: 16 }}
      icon={<SettingsIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          onClick={
            action.name === 'home'
              ? () => navigate('/')
              : action.name === 'mode'
              ? () => {
                  setMode(mode === 'light' ? 'dark' : 'light');
                }
              : console.log(action.name)
          }
        />
      ))}
    </SpeedDial>
  );
}
