import styles from "./Projects.module.css";

interface Project {
  name: string;
  link: string;
  description: string;
  techTags: string[];
}

const projects: Project[] = [
  {
    name: "Portfolio",
    link: "https://github.com/davidlkarlsson/Azure_Portfolio",
    description: "En enkel portfolio för kontakt samt lite tekniska färdigheter.",
    techTags: ["React", "TypeScript", "HTML", "CSS"],
  },
  {
    name: "Balanza",
    link: "https://github.com/davidlkarlsson/Balanza",
    description: "En React-app som låter användaren spåra sin ekonomiska utmaning under en vecka.",
    techTags: ["React", "TypeScript", "CSS"],
  },
];

export function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2>Projekt</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.link} className={styles.projectCard}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.techTags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Gå till projekt
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
