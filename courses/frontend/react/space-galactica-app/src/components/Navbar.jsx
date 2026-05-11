import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Planet } from "../icons/Planet";
import { Badge } from "./Badge";
import styles from "./Navbar.module.css";
import { NavItem } from "./NavItem";
import { NAV_LINKS } from "../constants/navLinks";
import { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";
const navbarItems = [
  {
    title: "About Us",
    link: "/about_us",
  },
  {
    title: "Destination",
    link: "/destination",
  },
  {
    title: "NASA Collaboration",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = useLocation().pathname;
  const { WishlistCount } = useContext(WishlistContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {NAV_LINKS.map((item, index) => (
            <NavItem
              key={item.link}
              index={index + 1}
              title={item.title}
              link={item.link}
              isActive={item.link === currentPath}
            />
          ))}

          <li className={styles.wishlistBadge} aria-label="Wishlist"></li>
        </ul>

        <Badge count={WishlistCount}>
          <Planet color="white" />
        </Badge>
      </nav>
    </header>
  );
};
