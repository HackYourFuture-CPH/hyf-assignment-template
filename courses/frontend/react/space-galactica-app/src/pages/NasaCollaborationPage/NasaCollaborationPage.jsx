import React, { useState, useEffect } from "react";
import styles from "./NasaCollaborationPage.module.css";
import RoverPhoto from "../../components/RoverPhoto";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://rovers.nebulum.one/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const response = await fetch(NASA_URLs.marsRoverPhoto);

        if (!response.ok) {
          throw new Error("Failed to fetch rover photos");
        }

        const data = await response.json();
        setRoverPhoto(data);
        setError(null);
      } catch (error) {
        console.error("Rover fetch error:", error);
        setError("Failed to load rover photo");
      }
    };

    const fetchDailyImg = async () => {
      try {
        const response = await fetch(NASA_URLs.astronomyPicOfTheDay);

        if (!response.ok) {
          throw new Error("Failed to fetch APOD");
        }

        const data = await response.json();
        setDailyImg(data);
        setError(null);
      } catch (error) {
        console.error("APOD fetch error:", error);
        setError("Failed to load Astronomy Picture of the Day");
      }
    };

    fetchRoverPhotos();
    fetchDailyImg();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          {error ? (
            <p className="error-message">{error}</p>
          ) : !dailyImg?.url ? (
            <p>Loading Astronomy Picture of the Day...</p>
          ) : (
            <>
              <h3>{dailyImg.title}</h3>
              <img
                className={styles.nasaPicOfTheDayImg}
                src={dailyImg.url}
                alt={dailyImg.title}
              />
              <p>{dailyImg.explanation}</p>
            </>
          )}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>

          {roverPhoto?.photos?.length ? (
            <div className={styles.roverGrid}>
              {roverPhoto.photos.map((photo) => (
                <RoverPhoto
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
