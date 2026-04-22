import styles from "./OurPartners.module.css";

const OurPartners = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Partners</h2>
          <p className={styles.description}>
            We collaborate with some of the most respected names in the space
            and technology industries to make every journey extraordinary.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img
              className={styles.logo}
              src="/business_partners/alphabet-logo.png"
              alt="Alphabet logo"
            />
          </div>
          <div className={styles.card}>
            <img
              className={styles.logo}
              src="/business_partners/amazon_logo.png"
              alt="Amazon logo"
            />
          </div>
          <div className={styles.card}>
            <img
              className={styles.logo}
              src="/business_partners/Microsoft-Logo-white.png"
              alt="Microsoft Logo"
            />
          </div>
          <div className={styles.card}>
            <img
              className={styles.logo}
              src="/business_partners/nyu-logo.png"
              alt="Nyu logo"
            />
          </div>
          <div className={styles.card}>
            <img
              className={styles.logo}
              src="/business_partners/QueensLogo_white.png"
              alt="Queens Logo"
            />
          </div>
          <div className={styles.card}>
            <img
              className={styles.logo}
              src="/business_partners/samsung-logo.png"
              alt="Samsung logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
