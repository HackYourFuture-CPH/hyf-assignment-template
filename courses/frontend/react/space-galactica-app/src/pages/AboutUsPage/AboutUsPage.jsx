import styles from "./AboutUsPage.module.css";
import OurCrew from "./OurCrew";
import OurPartners from "./OurPartners";
import OurValues from "./OurValues";

// 🧑🏽‍🚀 Task - Week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files in this folder.
// Import and use the components from the newly created files.

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
                <section className="card">
                    <OurValues />
        </section>
        <section className="card">
                  <OurCrew />
        </section>
        <section className="card">
          
          <OurPartners />
        </section>

          </main>
    </div>
  );
};

export default Crew;
