import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

const actions = [
  {
    icon: <HomeIcon />,
    name: 'home',
    onClick: () => {
      console.log('home');
    },
  },
];

export default function Fab() {
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
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  );
}
