const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div>
      <p>
        {roverName} — {date}
      </p>
      <img src={src} alt={roverName} />
    </div>
  );
};

export default RoverPhoto;
