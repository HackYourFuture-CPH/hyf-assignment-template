import { useState, useContext } from "react";
import styles from "./DestinationPage.module.css";
import { PlanetsWishlistItem } from "./PlanetsWishlistItem";
import { PlanetCard } from "./PlanetCard";
import { AddWishlistItem } from "./AddWishlistItem";
import { WishlistContext } from "../../contexts/WishlistContext";

export const Destinations = () => {
  const {
    planetsWishlist,
    addPlanetToWishlist,
    removePlanetFromWishlist,
    isPlanetInWishlist,
  } = useContext(WishlistContext);

  const togglePlanetSelection = (name, thumbnail) => {
    if (isPlanetInWishlist(name)) {
      removePlanetFromWishlist(name);
    } else {
      addPlanetToWishlist({ name, thumbnail });
    }
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

          <AddWishlistItem onAddWishlistItem={addPlanetToWishlist} />

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {planetsWishlist.map((planet) => (
              <PlanetsWishlistItem
                key={planet.name}
                name={planet.name}
                thumbnail={planet.thumbnail}
                onRemove={() => removePlanetFromWishlist(planet.name)}
              />
            ))}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          <PlanetCard
            name="Europa"
            description="Europa, one of Jupiter’s moons, 
            is an icy world with a hidden ocean beneath its surface. 
            This mysterious moon is a prime candidate 
            for the search for extraterrestrial life, 
            making it a thrilling destination for space explorers."
            thumbnail="/destination/image-europa.png"
            isSelected={isPlanetInWishlist("Europa")}
            togglePlanetSelection={togglePlanetSelection}
          />

          <PlanetCard
            name="Mars"
            description="Mars, the Red Planet, 
            is a barren yet fascinating world with vast deserts, 
            towering volcanoes, and the deepest canyon in the solar system. 
            As humanity’s next frontier, Mars invites us to dream of 
            colonization and the possibilities of life beyond Earth."
            thumbnail="/destination/image-mars.png"
            isSelected={isPlanetInWishlist("Mars")}
            togglePlanetSelection={togglePlanetSelection}
          />
          <PlanetCard
            name="Moon"
            description="Our closest celestial neighbor, 
            the Moon, is a silent witness to Earth's history. 
            With its stunning craters and desolate landscapes, 
            the Moon offers a unique glimpse into 
            space exploration's past and future, 
            making it a perfect destination for lunar adventurers."
            thumbnail="/destination/image-moon.png"
            isSelected={isPlanetInWishlist("Moon")}
            togglePlanetSelection={togglePlanetSelection}
          />
          <PlanetCard
            name="Titan"
            description="Titan, Saturn's largest moon, 
            is a world of dense atmosphere and liquid methane lakes.
             This enigmatic moon is shrouded in a thick orange haze, 
             concealing a landscape that is both alien and strangely familiar, 
             beckoning explorers to uncover its secrets."
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
