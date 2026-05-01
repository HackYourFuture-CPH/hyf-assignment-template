import styles from "./RoverPhoto.module.css";
const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverContainer}>
      <p>
        {roverName} — {date}
      </p>
      <img className={styles.roverImage} src={src} alt={roverName} />
    </div>
  );
};

export default RoverPhoto;
