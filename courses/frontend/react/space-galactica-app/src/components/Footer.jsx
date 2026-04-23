import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { SocialMediaItem } from "./SocialMediaItem";
import { Link } from "react-router-dom";
import { navbarItems } from "../../data/navigation";

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
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul className={styles.footerList}>
          <li>
            <Link to={navbarItems[0].link}>
              <b>{navbarItems[0].id}</b> {navbarItems[0].title}
            </Link>
          </li>
          <li>
            <Link to={navbarItems[1].link}>
              <b>{navbarItems[1].id}</b> {navbarItems[1].title}
            </Link>
          </li>
          <li>
            <Link to={navbarItems[2].link}>
              <b>{navbarItems[2].id}</b> {navbarItems[2].title}
            </Link>
          </li>
        </ul>
      </div>
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
