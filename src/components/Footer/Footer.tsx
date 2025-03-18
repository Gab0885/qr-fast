import styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="#f64348"
        stroke="#f64348"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
      by
      <a href="https://github.com/Gab0885" target="_blank">
        Gabriel Dias
      </a>
    </footer>
  );
}
