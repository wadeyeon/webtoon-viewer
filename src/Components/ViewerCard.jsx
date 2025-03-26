import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/ViewerCard.module.css';
import UploadButton from './UploadButton';
import ShowImages from './ShowImages';

export default function ViewerCard() {
  const [files, setFiles] = useState([]);
  const handleChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div className={styles.card}>
      <UploadButton onChange={handleChange} />
      <ShowImages files={files} />
    </div>
  );
}
