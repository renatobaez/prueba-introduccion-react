import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export function Footer() {
  return (
    <footer className="text-center p-3">
      <div className="social">
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
      </div>
			<p className="copyright">Todos los derechos reservados - Renato Báez</p>
    </footer>
  );
}
