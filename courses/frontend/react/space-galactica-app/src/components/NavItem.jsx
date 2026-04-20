import styles from "./Navbar.module.css";

export const NavItem = ({ title, link, isActive }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: link === currentPath,
      })}
    >
      <Link to={link}>
        <b>01</b> {title}
      </Link>
    </li>
  );
};
