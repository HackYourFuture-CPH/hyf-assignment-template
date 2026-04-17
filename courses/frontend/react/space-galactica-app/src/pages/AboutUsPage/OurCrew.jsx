import styles from "./AboutUsPage.module.css";

export const OurCrew = () => {
  return (
    <>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <div>
        <ul className={styles.crewList}>
          <li className={styles.crewListItem}>
            <img
              className={styles.crewImg}
              src="../../public/crew/image-anousheh-ansari.png"
              alt="Crew member photo"
            />
            <h4>Captain - Sarah Vega</h4>
            <p>
              A former NASA astronaut with over 15 years of experience, Captain
              Vega leads our missions with unparalleled expertise and a passion
              for space exploration.
            </p>
          </li>
          <li className={styles.crewListItem}>
            <img
              className={styles.crewImg}
              src="../../public/crew/image-douglas-hurley.png"
              alt="Crew member photo"
            />
            <h4>Chief Astrophysicist - Leo Redding</h4>
            <p>
              Our chief astrophysicist, Dr. Redding, is a renowned scientist who
              has contributed to major space discoveries. He ensures that every
              journey is as educational as it is exhilarating.
            </p>
          </li>
          <li className={styles.crewListItem}>
            <img
              className={styles.crewImg}
              src="../../public/crew/image-mark-shuttleworth.png"
              alt="Crew member photo"
            />
            <h4>Mission Specialist - Alex Santos</h4>
            <p>
              As a mission specialist, Alex’s job is to ensure that every aspect
              of the journey runs smoothly. With a background in both science
              and adventure tourism, Alex is the perfect guide for our space
              travelers.
            </p>
          </li>
          <li className={styles.crewListItem}>
            <img
              className={styles.crewImg}
              src="../../public/crew/image-victor-glover.png"
              alt="Crew member photo"
            />
            <h4>Chief Engineer - Victor Lee</h4>
            <p>
              With his extensive background in aerospace engineering, Victor Lee
              is responsible for the state-of-the-art technology that powers our
              spacecraft. His innovation ensures that our travelers are always
              in safe hands.
            </p>
          </li>
          <li className={styles.crewListItem}>
            <img
              className={styles.crewImg}
              src="../../public/crew/image-maya.png"
              alt="Crew member photo"
            />
            <h4>Crew Member - Maya Patel</h4>
            <p>
              Maya brings a unique blend of technical skills and customer
              service experience to the team. She’s always ready to assist with
              any needs and to make sure every traveler has an unforgettable
              experience.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};
