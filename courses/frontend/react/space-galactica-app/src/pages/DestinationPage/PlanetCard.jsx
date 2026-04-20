import styles from "./DestinationPage.module.css";

export const PlanetCard = ({
  name,
  description,
  thumbnail,
  isSelected,
  //   togglePlanetSelection,
}) => {
  const isPlanetInWishlist = (planetName) => {
    // 🧑🏽‍🚀 Task - Week 2
    // This should be a simple function to check if a given planet is selected.
    // You will need to work with the array of planets wishlist.
  };

  const togglePlanetSelection = (name, thumbnail) => {
    // 🧑🏽‍🚀 Task - Week 2
    // When a planet is selected or deselected (toggled), the state of the wishlist planets should be updated accordingly by
    // calling the addPlanetToWishlist or removePlanetFromWishlist function. You will need a condition here.
  };

  const addPlanetToWishlist = (name, thumbnail) => {
    // 🧑🏽‍🚀 Task - Week 2
    // Add the planet to the planets wishlist state.
  };
  const removePlanetFromWishlist = (name) => {
    // 🧑🏽‍🚀 Task - Week 2
    // Remove the planet from the planets wishlist state.
  };

  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt="" />
      <div className={styles.planetDescription}>
        <h2>
          {name} {isPlanetInWishlist({ name }) ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button
        className="roundButton"
        onClick={() => togglePlanetSelection({ name })}
      >
        {isPlanetInWishlist({ name })
          ? "REMOVE FROM WISHLIST"
          : "ADD TO WISHLIST"}
      </button>
    </div>
  );
};
