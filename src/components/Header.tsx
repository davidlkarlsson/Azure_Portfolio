import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <nav>
        <div className={styles.title}>Min Portfolio</div>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Om Mig</Link>
          <Link to="/projects" className={styles.navLink}>Projekt</Link>
          <Link to="/skills" className={styles.navLink}>Teknik</Link>
          <Link to="/contact" className={styles.navLink}>Kontakt</Link>
        </div>
      </nav>
    </header>
  );
}

