import React from 'react';
import { useLocation } from 'react-router';
import styles from '../styles/Viewer.module.css';
import ViewerCard from '../Components/ViewerCard';

export default function Viewer() {
  const {
    state: { column },
  } = useLocation();

  const columns = new Array(parseInt(column)).fill(0).map((_, i) => i);

  return (
    <section className={styles.viewer}>
      {columns.map((_, i) => (
        <ViewerCard key={i} />
      ))}
    </section>
  );
}
