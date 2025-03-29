import React, { useState } from 'react';
import styles from '../styles/ViewerCard.module.css';
import UploadButton from './UploadButton';
import ShowImages from './ShowImages';

export default function ViewerCard() {
  const [files, setFiles] = useState([]);
  const handleChange = (e) => setFiles(Array.from(e.target.files));

  return (
    <div className={styles.card}>
      {files.length === 0 && <UploadButton onChange={handleChange} />}
      {files && <ShowImages files={files} />}
    </div>
  );
}
