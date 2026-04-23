import styles from "./Navbar.module.css";

export const NavItem = ({ id, title, link, isActive }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: link === currentPath,
      })}
    >
      <Link to={link}>
        <b>{id}</b> {title}
      </Link>
    </li>
  );
};
