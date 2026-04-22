import styles from "./OurCrew.module.css";
const OurCrew = () => {
  // 🧑🏽‍🚀 Task - Week 1

  // Some inspiration ideas can be found in /data/inspiration_about_us
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Crew</h2>
          <p className={styles.description}>
            Our crew is the heart and soul of Galactica. We are a diverse team
            of seasoned space explorers, engineers, and visionaries who are
            united by a common goal: to make space travel accessible and
            exciting for all.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img
              className={styles.image}
              src="/crew/image-anousheh-ansari.png"
              alt="Captain Sarah Vega"
            />
            <p className={styles.name}>Sarah Vega</p>
            <p className={styles.role}>Captain </p>
            <p className={styles.bio}>
              A former NASA astronaut with over 15 years of experience, Captain
              Vega leads our missions with unparalleled expertise and a passion
              for space exploration
            </p>
          </div>

          <div className={styles.card}>
            <img
              className={styles.image}
              src="/crew/image-douglas-hurley.png"
              alt="Dr.Leo Redding"
            />
            <p className={styles.name}>Dr. Leo Redding</p>
            <p className={styles.role}>Chief Astrophysicist</p>
            <p className={styles.bio}>
              Our chief astrophysicist, Dr. Redding, is a renowned scientist who
              has contributed to major space discoveries. He ensures that every
              journey is as educational as it is exhilarating.
            </p>
          </div>

          <div className={styles.card}>
            <img
              className={styles.image}
              src="/crew/image-mark-shuttleworth.png"
              alt="Chief Engineer Hana Lee"
            />
            <p className={styles.name}> Hana Lee</p>
             <p className={styles.role}>Chief Engineer</p>
            <p className={styles.bio}>
                            With her extensive background in aerospace engineering, Hana Lee
              is responsible for the state-of-the-art technology that powers our
              spacecraft. Her innovation ensures that our travelers are always
              in safe hands.
            </p>
          </div>

          <div className={styles.card}>
            <img
              className={styles.image}
              src="/crew/image-douglas-hurley.png"
              alt="Mission Specialist Alex Santos"
            />
            <p className={styles.name}> Alex Santos</p>
             <p className={styles.role}>Mission Specialist</p>
            <p className={styles.bio}>
              As a mission specialist, Alex’s job is to ensure that every aspect
              of the journey runs smoothly. With a background in both science
              and adventure tourism, Alex is the perfect guide for our space
              travelers.
            </p>
          </div>

          <div className={styles.card}>
            <img
              className={styles.image}
              src="/crew/image-douglas-hurley.png"
              alt="Crew Member Maya Patel"
            />
            <p className={styles.name}>Maya Patel</p>
             <p className={styles.role}>Crew Member</p>
            <p className={styles.bio}>
              Maya brings a unique blend of technical skills and customer
              service experience to the team. She’s always ready to assist with
              any needs and to make sure every traveler has an unforgettable
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCrew;
