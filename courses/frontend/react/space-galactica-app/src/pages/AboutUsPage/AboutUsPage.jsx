import styles from './AboutUsPage.module.css';

// 🧑🏽‍🚀 Task - Week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files in this folder.
// Import and use the components from the newly created files.

const OurValues = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Values" section.
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  return (
     <section className={styles.valuesSection}>
   
       <div className={styles.valuesGrid}>

  <div className={styles.valueItem}>
    <h3 className={styles.valueHeading}>Exploration</h3>
    <p className={styles.valueText}>
      We are driven by a deep-seated desire to explore the unknown. 
      We believe that the pursuit of discovery is at the heart of human nature, 
      and we are committed to pushing the boundaries of what is possible.
    </p>
  </div>

 

  <div className={styles.valueItem}>
    
    <h3 className={styles.valueHeading}>Innovation</h3>
    <p className={styles.valueText}>
      At Galactica, we prioritize cutting-edge technology and innovation.
      We are constantly evolving our spacecraft, safety protocols, 
      and services to ensure that our travelers experience the most advanced 
      and secure space journeys available.
    </p>
  </div>

 

  <div className={styles.valueItem}>
    
    <h3 className={styles.valueHeading}>Sustainability</h3>
    <p className={styles.valueText}>
      We are committed to making space exploration sustainable for future generations. 
      Our space missions are designed to minimize environmental impact, both on Earth and in space, 
      and to foster a spirit of responsibility towards our universe.
    </p>
  </div>

 <div className={styles.valueItem}>
    
    <h3 className={styles.valueHeading}>Community</h3>
    <p className={styles.valueText}>
      We believe in the power of collective exploration. 
      Our journeys are not just about reaching new destinations; 
      they are about building a community of space enthusiasts who share a passion for the stars.
    </p>
  </div>
  
  </div>
</section>
      );
};

const OurCrew = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Crew section".
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Use the pictures from /public/crew.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  return (
     <section className={styles.crewSection}>

      <p className = {styles.crewIntro}>Our crew is the heart and soul of Galactica. 
        We are a diverse team of seasoned space explorers, engineers, 
        and visionaries who are united by a common goal: 
        to make space travel accessible and exciting for all.</p>

      <div className={styles.crewGrid}>
        
        <div className={styles.crewMember}>
          <img src="/crew/image-anousheh-ansari.webp" 
          alt="Captain Sarah Vega"
          className={styles.crewImage}/>
          <h3 className={styles.crewRole}>Mission Commander</h3>
          <p className = {styles.crewBio}>Captain Sarah Vega: 
            A former NASA astronaut with over 15 years of experience,
             Captain Vega leads our missions with unparalleled 
             expertise and a passion for space exploration.</p>
           </div>
           
           <div className={styles.crewMember}>
            <img src="/crew/image-mark-shuttleworth.webp" 
          alt="Dr. Leo Redding"
          className={styles.crewImage}/>
          <h3 className={styles.crewRole}>Chief Astrophysicist</h3>
          <p className = {styles.crewBio}>Dr. Leo Redding: Our chief astrophysicist, 
            Dr. Redding, is a renowned scientist who has contributed to major 
            space discoveries. He ensures that every journey is as educational as it is exhilarating.</p>
          </div>
   
           <div className={styles.crewMember}>
            <img src="/crew/image-anousheh-ansari.webp" 
          alt="Hana Lee"
          className={styles.crewImage}/>
          <h3 className={styles.crewRole}>Chief Engineer</h3>
          <p className = {styles.crewBio}>Chief Engineer Hana Lee: 
            With her extensive background in aerospace engineering, 
            Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. 
            Her innovation ensures that our travelers are always in safe hands.</p>
            </div>
          
          <div className={styles.crewMember}>
            <img src="/crew/image-douglas-hurley.webp" 
           alt="Alex Santos"
          className={styles.crewImage}/>
          <h3 className={styles.crewRole}>Mission Specialist</h3>
          <p className = {styles.crewBio}>Mission Specialist Alex Santos: 
            As a mission specialist, Alex’s job is to ensure that every aspect of 
            the journey runs smoothly. With a background in both science and adventure tourism, 
            Alex is the perfect guide for our space travelers.</p>
          </div>

          <div className={styles.crewMember}>
            <img src="/crew/image-victor-glover.webp" 
          alt="Victor Glover"
          className={styles.crewImage}/>
          <h3 className={styles.crewRole}>Crew Support Specialist</h3>
          <p className = {styles.crewBio}>Crew Member Victor Glover: 
            Victor brings a unique blend of technical skills 
            and customer service experience to the team. 
            He’s always ready to assist with any needs and to make 
            sure every traveler has an unforgettable experience.</p>
          </div>


 
      </div>
    </section>
         
    

         );
}

const OurPartners = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Partners section".
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Use the pictures from /public/business_partners.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  return (
   
    <p> ADD OUR PARTNERS HERE </p>

  );
}


export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues/>
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew/>
        </section>

         {/* 🧑🏽‍🚀 Task - Week 1 */}
         {/* Use the "OurPartners" component here. */}
      </main>
    </div>
  );
}

export default Crew;
