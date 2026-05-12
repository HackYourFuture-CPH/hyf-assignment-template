import styles from './AboutUsPage.module.css';
import OurValues from './OurValues.jsx';
import OurCrew from './OurCrew.jsx';
import OurPartners from './OurPartners.jsx';

export const AboutUsPage = () => {
  return (
    <main className={styles.mainContent}>

      <section className={styles.description}>
        <h2>Our Mission</h2>
      </section>

      <section className={styles.card}>
        <h2>Our Values</h2>
        <OurValues />
      </section>

      <section className={styles.card}>
        <h2>The Crew</h2>
        <OurCrew />
      </section>

      <section className={styles.card}>
        <h2>Our Partners</h2>
        <OurPartners />
      </section>
    </main>

  );
};

export default AboutUsPage;