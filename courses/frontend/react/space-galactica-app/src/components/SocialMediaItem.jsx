import styles from "./Footer.module.css";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon && <img src={icon} alt={title} />}
        {title}
      </a>
    </li>
  );
};
