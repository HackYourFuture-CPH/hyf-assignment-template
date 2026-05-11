import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Navbar.module.css";

export const NavItem = ({ index, title, link, isActive }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link to={link}>
        <b>{String(index).padStart(2, "0")}</b> {title}
      </Link>
    </li>
  );
};
