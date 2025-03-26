import React from 'react';
import styles from '../styles/ShowImages.module.css';
import ImageItem from './ImageItem';

export default function ShowImages({ files }) {
  return (
    <ul className={styles.images}>
      {files.map((file, i) => (
        <ImageItem key={i} file={file} />
      ))}
    </ul>
  );
}
