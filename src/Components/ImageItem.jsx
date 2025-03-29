import React from 'react';
import styles from '../styles/ImageItem.module.css';

export default function ImageItem({ file }) {
  const src = URL.createObjectURL(file);

  return (
    <li>
      <img className={styles.item__image} src={src} title={file.name} />
    </li>
  );
}
