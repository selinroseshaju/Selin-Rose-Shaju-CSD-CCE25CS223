import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{portfolioData.name}</h3>
          <p>{portfolioData.introduction}</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
            </li>
            <li>
              <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
            </li>
            <li>{portfolioData.location}</li>
          </ul>
        </div>

        <div>
          <h4>Follow</h4>
          <ul className="footer-links social-links">
            <li>
              <a href={portfolioData.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {currentYear} {portfolioData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
