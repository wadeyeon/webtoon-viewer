import { useState } from 'react';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';
import InputModal from '../Components/InputModal';

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.home}>
      <div className={styles.home__container}>
        <h1 className={styles.home__title}>
          WEBTOON
          <br />
          VIEWER
        </h1>
        <Button variant='contained' size='large' onClick={() => setOpen(true)}>
          START
        </Button>
        <InputModal open={open} onClose={() => setOpen(false)} />
      </div>
    </section>
  );
}

export default Home;
