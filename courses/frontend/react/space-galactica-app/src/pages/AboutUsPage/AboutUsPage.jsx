import { OurValues } from "./OurValues";
import { OurCrew } from "./OurCrew";
import { OurPartners } from "./OurPartners";

// 🧑🏽‍🚀 Task - Week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files in this folder.
// Import and use the components from the newly created files.

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Mission</h2>
          <p>
            At Galactica, our mission is to unlock the wonders of the universe
            for everyone. We believe that space is the final frontier and that
            the opportunity to explore it should be within everyone’s reach. Our
            journeys are designed to inspire, educate, and provide a
            once-in-a-lifetime experience that transcends the ordinary.
          </p>
        </section>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew />
        </section>
        <section className="card">
          <h2>Our partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
