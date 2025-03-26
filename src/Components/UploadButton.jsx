import React from 'react';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function UploadButton({ onChange }) {
  return (
    <Button
      style={{ width: '100%' }}
      component='label'
      role={undefined}
      variant='contained'
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Open Images
      <VisuallyHiddenInput type='file' onChange={onChange} multiple />
    </Button>
  );
}
