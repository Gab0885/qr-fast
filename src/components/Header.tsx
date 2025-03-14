import logo from "@/assets/images/icon.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="branding">
        <img src={logo} alt="logo do aplicativo" />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to={"/home"}>Gerar QR Code</Link>
          </li>
          <li>
            <Link to={"/faq"}>FAQ</Link>
          </li>
        </ul>
      </nav>

        <p className="slogan">Seu QR Code em um clique!</p>
    </header>
  );
}
