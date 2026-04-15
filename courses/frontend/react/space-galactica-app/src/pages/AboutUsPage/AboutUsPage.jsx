import styles from './AboutUsPage.module.css';

// 🧑🏽‍🚀 Task - Week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files in this folder.
// Import and use the components from the newly created files.


const OurMission = () => {
  return (
    <section className={styles.missionSection}>

     

      <p className={styles.missionText}>
        At Galactica, our mission is to make space travel accessible, inspiring,
        and transformative. We aim to push the boundaries of exploration while
        empowering future generations to reach for the stars.
      </p>
    </section>
  );
};






const OurValues = () => {
 
  return (
    <section className={styles.valuesSection}>

     
    
    <div className={styles.valuesGrid}>  

<div className={`${styles.valueItem} ${styles.valueExploration}`}>
  <h3 className={styles.valueHeading}>Exploration</h3>
<p className={styles.valueText}>We are driven by a deep-seated desire to explore the unknown.
  We believe that the pursuit of discovery is at the heart of human nature,
  and we are committed to pushing the boundaries of what is possible.</p>
  </div>

  <div className={`${styles.valueItem} ${styles.valueInnovation}`}>
  <h3 className={styles.valueHeading}>Innovation</h3>
<p className={styles.valueText}>At Galactica, we prioritize cutting-edge technology and innovation.
  We are constantly evolving our spacecraft, 
  safety protocols,and services to ensure that our travelers experience 
  the most advancedand secure space journeys available.</p>
  </div>

<div className={`${styles.valueItem} ${styles.valueSustainability}`}>
  <h3 className={styles.valueHeading}>Sustainability</h3>
<p className={styles.valueText}>We are committed to making space exploration sustainable for future generations.
  Our space missions are designed to minimize environmental impact, 
  both on Earth and in space,and to foster a spirit of responsibility towards our universe.</p>
  </div>
<div className={`${styles.valueItem} ${styles.valueCommunity}`}>
  <h3 className={styles.valueHeading}>Community</h3>
<p className={styles.valueText}>We believe in the power of collective exploration.
  Our journeys are not just about reaching new destinations;
  they are about building a community of space enthusiasts who share a passion for the stars.</p>
  </div>
  </div>
  </section>


  );
};

const OurCrew = () => {
 
  return (
   <section className={styles.crewSection}>

    

      <p className={styles.crewIntro}>
        Our crew is the heart and soul of Galactica.
        We are a diverse team of seasoned space explorers, engineers,
        and visionaries who are united by a common goal:
        to make space travel accessible and exciting for all.
      </p>

      <div className={styles.crewGrid}>

        <div className={styles.crewMember}>
          <img
            src="/crew/image-anousheh-ansari.webp"
            alt="Captain Sarah Vega"
            className={styles.crewImage}
          />
          <h3 className={styles.crewName}>Sara Vega</h3>
          <p className={styles.crewRole}>Mission Commander</p>
          <p className={styles.crewBio}>
            A former NASA astronaut with over 15 years of experience,
            Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.
          </p>
        </div>

        <div className={styles.crewMember}>
          <img
            src="/crew/image-mark-shuttleworth.webp"
            alt="Dr. Leo Redding"
            className={styles.crewImage}
          />
          <h3 className={styles.crewName}>Dr.Leo Redding</h3>
          <p className={styles.crewRole}>Cheif Astrophysicist</p>
          <p className={styles.crewBio}>
            Our chief astrophysicist, Dr. Redding, is a renowned scientist
            who has contributed to major space discoveries. He ensures that every journey
            is as educational as it is exhilarating.
          </p>
        </div>

        <div className={styles.crewMember}>
          <img
            src="/crew/image-anousheh-ansari.webp"
            alt="Hana Lee"
            className={styles.crewImage}
          />
          <h3 className={styles.crewName}>Hana Lee</h3>
          <p className={styles.crewRole}>Chief Engineer</p>
          <p className={styles.crewBio}>
            With her extensive background in aerospace engineering,
            Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft.
            Her innovation ensures that our travelers are always in safe hands.
          </p>
        </div>

        <div className={styles.crewMember}>
          <img
            src="/crew/image-douglas-hurley.webp"
            alt="Alex Santos"
            className={styles.crewImage}
          />
          <h3 className={styles.crewName}>Alex Santos</h3>
          <p className={styles.crewRole}>Mission Specialist</p>
          <p className={styles.crewBio}>
            As a mission specialist, Alex’s job is to ensure
            that every aspect of the journey runs smoothly. With a background in both science
            and adventure tourism, Alex is the perfect guide for our space travelers.
          </p>
        </div>

        <div className={styles.crewMember}>
          <img
            src="/crew/image-victor-glover.webp"
            alt="Victor Glover"
            className={styles.crewImage}
          />
          <h3 className={styles.crewName}>Victor Glover</h3>
          <p className={styles.crewRole}>Crew Support Specialist</p>
          <p className={styles.crewBio}>
            Victor brings a unique blend of technical skills
            and customer service experience to the team. He’s always ready to assist with any needs
            and to make sure every traveler has an unforgettable experience.
          </p>
        </div>

      </div>
    </section>


  );
}

const OurPartners = () => {
  
  return (
     <section className = {styles.partnersSection}>
      

      <p className = {styles.partnerIntro}>We collaborate with some of the most respected names 
                                          in the space and technology industries to 
                                          make every journey extraordinary.</p>

       <div className={styles.partnerGrid}>
        <img src="/business_partners/alphabet-logo.png" alt="Alphabet" className= {styles.partnerLogo}/> 
        <img src="/business_partners/amazon_logo.png" alt="Amazon" className= {styles.partnerLogo}/>
        <img src="/business_partners/CBC_Logo_White.png" alt="CBC" className= {styles.partnerLogo}/>
        <img src="/business_partners/Microsoft-Logo-white.png" alt="Microsoft" className= {styles.partnerLogo}/>
        <img src="/business_partners/nyu-logo.png" alt="NYU" className= {styles.partnerLogo}/>
        <img src="/business_partners/QueensLogo_white.png" alt="Queens" className= {styles.partnerLogo}/>
        <img src="/business_partners/samsung-logo.png" alt="Samsung" className= {styles.partnerLogo}/>
        <img src="/business_partners/sodexo-logo.png" alt="Sodexo" className= {styles.partnerLogo}/>
        </div>                                    
    </section>
  );
}


export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className= "card">
           <h2>Our Mission</h2>
          <OurMission/>
        </section>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues/>
        </section>
        <section className="card">
          <h2 className={styles.crewTitle}>The Crew</h2>
         <OurCrew/>
        </section>
        {/* 🧑🏽‍🚀 Task - Week 1 */}
         {/* Use the "OurPartners" component here. */}
        <section className ="card">
          <h2 className = {styles.partnersTitle}>Our Partners</h2>
        <OurPartners />
        </section>

         
      </main>
    </div>
  );
}

export default Crew;
