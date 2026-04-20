import styles from "./SocialMediaItem.module.css";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a className={styles.socialLink} href={url}>
        {icon && <img className={styles.socialIcon} src={icon} />}
        <p>{title}</p>
      </a>
    </li>
  );
};
