import styles from "./DestinationPage.module.css";

export const PlanetCard = ({
  id,
  name,
  description,
  thumbnail,
  isSelected,
  togglePlanetSelection,
}) => {
  const cardClassName = `${styles.planetCard} ${isSelected ? styles.selectedCard : ""}`;

  return (
    <div className={cardClassName}>
      <img className={styles.planetThumbnail} src={thumbnail} alt="" />
      <div className={styles.planetDescription}>
        <h2>
          {name} {isSelected && "- SELECTED"}
        </h2>
        <p>{description}</p>
      </div>
      <button className="roundButton" onClick={togglePlanetSelection}>
        {isSelected ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}
      </button>
    </div>
  );
};
