import { useState } from "react";
import styles from "./DestinationPage.module.css";
import { PlanetsWishlistItem } from "./PlanetsWishlistItem";
import { PlanetCard } from "./PlanetCard";

export const Destinations = () => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const planetsList = [
    {
      name: "Europa",
      description:
        "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
      thumbnail: "/destination/image-europa.png",
      isSelected: false,
    },
    {
      name: "Mars",
      description:
        "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
      thumbnail: "/destination/image-mars.png",
      isSelected: false,
    },
    {
      name: "Moon",
      description:
        "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
      thumbnail: "/destination/image-moon.png",
      isSelected: false,
    },
    {
      name: "Titan",
      description:
        "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
      thumbnail: "/destination/image-titan.png",
      isSelected: false,
    },
  ];

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {/* 🧑🏽‍🚀 Task - Week 2 */}
          {/* Display the number of wishlist planets, if there are any planets in the wishlist. */}
          {/* Display the "no planets" message if the wishlist is empty. */}
          <p>No planets in your wishlist :(</p>
          {/* 🧑🏽‍🚀 Use a variable to display the number of wishlist planets:  */}
          <p>You have X planets in your wishlist</p>

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
          {/* 🧑🏽‍🚀 Task - Week 2 */}
          {/* Add all 4 planets: Europa, Moon, Mars, Titan.  */}
          {/* Use the README.md file for descriptions. */}
          {/* Create a <PlanetCard /> component, which accepts the following props: name, description, thumbnail, isSelected, togglePlanetSelection */}
          {planetsList.map((planet) => (
            <PlanetCard {...planet} />
          ))}
          {/* <div className={styles.planetCard}>
            <img
              className={styles.planetThumbnail}
              src="/destination/image-europa.png"
              alt=""
            />
            <div className={styles.planetDescription}>
              <h2>EUROPA {isPlanetInWishlist("Europa") ? "- SELECTED" : ""}</h2>
              <p>Lorem ipsum...</p>
            </div>
            <button
              className="roundButton"
              onClick={() => togglePlanetSelection("Europa")}
            >
              {isPlanetInWishlist("Europa")
                ? "REMOVE FROM WISHLIST"
                : "ADD TO WISHLIST"}
            </button>
          </div>
          <div className={styles.planetCard}>
            <img
              className={styles.planetThumbnail}
              src="/destination/image-mars.png"
              alt=""
            />
            <div className={styles.planetDescription}>
              <h2>MARS {isPlanetInWishlist("Mars") ? "- SELECTED" : ""}</h2>
              <p>Lorem ipsum...</p>
            </div>
            <button
              className="roundButton"
              onClick={() => togglePlanetSelection("Mars")}
            >
              {isPlanetInWishlist("Mars")
                ? "REMOVE FROM WISHLIST"
                : "ADD TO WISHLIST"}
            </button>
          </div> */}
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
