import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'Microsoft Office', level: 'Intermediate' },
    { name: 'Tableau', level: 'Intermediate' },
    { name: 'Public Speaking', level: 'Advanced' },
    { name: 'JavaScript', level: 'Beginner' }
  ];
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills">
        {skillsData.map((skill, index) => (
          <Skill key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};
export default Skills;