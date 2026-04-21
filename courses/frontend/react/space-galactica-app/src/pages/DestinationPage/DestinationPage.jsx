import { useState } from "react";
import styles from "./DestinationPage.module.css";
import { PlanetsWishlistItem } from "./PlanetsWishlistItem";
import { PlanetCard } from "./PlanetCard";

export const Destinations = () => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const isPlanetInWishlist = (planetName) => {
    return planetsWishlist.some((planet) => planet.name === planetName);
  };

  const togglePlanetSelection = (name, thumbnail) => {
    if (isPlanetInWishlist(name)) {
      removePlanetFromWishlist(name);
    } else {
      addPlanetToWishlist(name, thumbnail);
    }
  };

  const addPlanetToWishlist = (name, thumbnail) => {
    setPlanetsWishlist((prev) => [...prev, { name, thumbnail }]);
  };
  const removePlanetFromWishlist = (name) => {
    setPlanetsWishlist((prev) => prev.filter((planet) => planet.name !== name));
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {planetsWishlist.length === 0 ? (
            <p>No planets in your wishlist :(</p>
          ) : (
            <p>You have {planetsWishlist.length} planets in your wishlist</p>
          )}
          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* Use the AddWishlistItem component here. */}
          {/* 🧑🏽‍🚀 Task - Week 3
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            ...
            Use .map() to display the wishlist planets with the PlanetsWishlistItem component. 
          </div> 
          */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          <PlanetCard
            name="Europa"
            description="Lorem ipsum..."
            thumbnail="/destination/image-europa.png"
            isSelected={isPlanetInWishlist("Europa")}
            togglePlanetSelection={togglePlanetSelection}
          />

          <PlanetCard
            name="Mars"
            description="Lorem ipsum..."
            thumbnail="/destination/image-mars.png"
            isSelected={isPlanetInWishlist("Mars")}
            togglePlanetSelection={togglePlanetSelection}
          />
          <PlanetCard
            name="Moon"
            description="Lorem ipsum..."
            thumbnail="/destination/image-moon.png"
            isSelected={isPlanetInWishlist("Moon")}
            togglePlanetSelection={togglePlanetSelection}
          />
          <PlanetCard
            name="Titan"
            description="Lorem ipsum..."
            thumbnail="/destination/image-titan.png"
            isSelected={isPlanetInWishlist("Titan")}
            togglePlanetSelection={togglePlanetSelection}
          />
        </section>
      </main>
    </div>
  );
};

export default Destinations;

// 🧑🏽‍🚀 Task - Week 4 - part 2
// Hate to break it to you, but you will have to make some changes to the code you already wrote.
// Now that you have context, grab and use the context data in this.
// You will need to replace some of the variables and functions with the ones from the context.
