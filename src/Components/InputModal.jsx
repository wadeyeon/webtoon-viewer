import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function InputModal({ open, handleClose }) {
  const [column, setColumn] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setColumn(e.target.value);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const column = formJson.column;
            navigate('/viewer', { state: { column } }); // 이동
            handleClose();
          },
        },
      }}
    >
      <DialogContent>
        <DialogContentText>열 갯수를 선택해주세요.</DialogContentText>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-simple-select-standard-label'>Column</InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            name='column'
            value={column}
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button type='submit'>OK</Button>
      </DialogActions>
    </Dialog>
  );
}
