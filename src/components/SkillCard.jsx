const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="skill-progress-track" aria-label={`${skill.name} skill level`}>
        <div className="skill-progress-bar" style={{ width: `${skill.level}%` }} />
      </div>
    </div>
  );
};

export default SkillCard;
