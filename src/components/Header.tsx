import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Om mig</Link>{" | "}
        <Link to="/projects">Projekt</Link>{" | "}
        <Link to="/skills">Skills</Link>{" | "}
        <Link to="/contact">Kontakt</Link>
      </nav>
    </header>
  );
}
