import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.footerLink}
        href="https://dc5b.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; {new Date().getFullYear()}{" "}
        <i className={styles.logo}>
          <svg
            className={styles.logoShadow0}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
          >
            <path d="M160,208V689l100,5v306H360V698l90,4V840H550V707l290,13V160ZM310,580V300l380,16.2V574Z" />
          </svg>
          <svg
            className={styles.logoShadow1}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
          >
            <path d="M160,208V689l100,5v306H360V698l90,4V840H550V707l290,13V160ZM310,580V300l380,16.2V574Z" />
          </svg>
          <svg
            className={styles.logoShadow2}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
          >
            <path d="M160,208V689l100,5v306H360V698l90,4V840H550V707l290,13V160ZM310,580V300l380,16.2V574Z" />
          </svg>
        </i>
        DC5B
      </a>
    </footer>
  );
}
