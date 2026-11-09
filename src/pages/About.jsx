import portfolioData from '../data/portfolioData';
import SkillCard from '../components/SkillCard';
import '../styles/About.css';

const About = () => {
  return (
    <div className="page-shell section-spacing">
      <div className="container">
        <header className="section-heading narrow-heading">
          <p className="eyebrow">Profile</p>
          <h1>About Me</h1>
        </header>

        <div className="about-intro">
          {portfolioData.aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <section className="content-panel">
          <h2>Education</h2>
          <div className="timeline-list">
            {portfolioData.education
              .filter((item) => item.course && item.institution && item.duration)
              .map((item) => (
                <div key={`${item.course}-${item.institution}`} className="info-card">
                  <p className="meta-label">{item.duration}</p>
                  <h3>{item.course}</h3>
                  <p className="muted-text">{item.institution}</p>
                  {item.details && <p>{item.details}</p>}
                </div>
              ))}
          </div>
        </section>

        <section className="content-panel">
          <h2>Technical Skills</h2>
          <div className="skill-grid">
            {portfolioData.skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>

        <section className="content-panel">
          <h2>Work Experience</h2>
          <div className="timeline-list">
            {portfolioData.experience.map((job) => (
              <div key={`${job.title}-${job.company}`} className="info-card">
                <p className="meta-label">{job.duration}</p>
                <h3>{job.title}</h3>
                <p className="muted-text">{job.company}</p>
                <p>{job.description}</p>
                <ul className="bullet-list">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="content-panel">
          <h2>Certifications</h2>
          <div className="timeline-list">
            {portfolioData.certifications.map((cert) => (
              <div key={`${cert.name}-${cert.issuer}`} className="info-card">
                {cert.year && <p className="meta-label">{cert.year}</p>}
                <h3>{cert.name}</h3>
                <p className="muted-text">{cert.issuer}</p>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-panel">
          <h2>Achievements</h2>
          <ul className="achievement-list">
            {portfolioData.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </section>

        <section className="content-panel">
          <h2>Career Interests & Goals</h2>
          <div className="goals-grid">
            <div className="goal-card">
              <h3>Career Interests</h3>
              <p>{portfolioData.goals.careerInterests}</p>
            </div>
            <div className="goal-card">
              <h3>Short-Term Goals</h3>
              <p>{portfolioData.goals.shortTerm}</p>
            </div>
            <div className="goal-card">
              <h3>Long-Term Goals</h3>
              <p>{portfolioData.goals.longTerm}</p>
            </div>
            <div className="goal-card">
              <h3>Professional Development</h3>
              <p>{portfolioData.goals.developmentPlan}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
