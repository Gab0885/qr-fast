import logo from "@/assets/images/icon.png";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <img src={logo} alt="logo do aplicativo" />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to={"/"}>Gerar QR Code</Link>
          </li>
          <li>
            <Link to={"/faq"}>Dúvidas</Link>
          </li>
        </ul>
      </nav>

        <p className={styles.slogan}>Seu QR Code em um clique!</p>
    </header>
  );
}
