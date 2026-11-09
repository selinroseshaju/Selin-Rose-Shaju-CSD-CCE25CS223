import { useNavigate } from 'react-router-dom';
import portfolioData from '../data/portfolioData';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleScrollToProjects = () => {
    document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1>{portfolioData.name}</h1>
            <h2>{portfolioData.title}</h2>
            <p className="intro-text">{portfolioData.introduction}</p>
            <div className="hero-actions">
              <button type="button" className="primary-btn" onClick={handleScrollToProjects}>
                View My Work
              </button>
              <button type="button" className="secondary-btn" onClick={() => navigate('/contact')}>
                Contact Me
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-frame">
              <img src={portfolioData.profileImage} alt={portfolioData.name} />
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section-spacing">
        <div className="container">
          <header className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Core Technologies</h2>
          </header>
          <div className="skill-grid">
            {portfolioData.skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <section id="featured-projects" className="projects-section section-spacing">
        <div className="container">
          <header className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Featured Projects</h2>
          </header>
          <div className="project-grid">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
