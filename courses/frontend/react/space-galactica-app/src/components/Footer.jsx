import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { SocialMediaItem } from "./SocialMediaItem";

export const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className={pathname !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* 🧑🏽‍🚀 Task - Week 2 */}
      {/* Create a new list for the Pages. */}
      {/* We need to use the <Link /> component here. */}
      {/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */}
      {/* Docs for the Link: https://reactrouter.com/api/components/Link#link. */}

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem
            title="Facebook"
            url="https://facebook.com"
            icon="../public/socialmedia/facebook.png"
          />
          <SocialMediaItem
            title="Instagram"
            url="https://instagram.com"
            icon="../public/socialmedia/instagram.png"
          />
          <SocialMediaItem
            title="TikTok"
            url="https://tiktok.com"
            icon="../public/socialmedia/tiktok.png"
          />
          <SocialMediaItem
            title="LinkedIn"
            url="https://linkedin.com"
            icon="../public/socialmedia/linkedin.png"
          />
          <SocialMediaItem
            title="On the streets at night"
            url="https://google.com"
          />
        </ul>
      </div>
    </footer>
  );
};
