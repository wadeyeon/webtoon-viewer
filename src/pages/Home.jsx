import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.home__container}>
        <h1 className={styles.home__title}>
          WEBTOON
          <br />
          VIEWER
        </h1>
        <Button variant='contained' size='large'>
          START
        </Button>
      </div>
    </section>
  );
}

export default Home;
