import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      position: 'Optometric Technician/Receptionist',
      company: 'Summit Eye Care',
      duration: 'Oct 2023 - Present'
    },
    {
      position: 'Camp Photographer',
      company: 'Camp Kippewa for Girls',
      duration: 'Jun 2023 - Aug 2023'
    },
    {
        position: 'Optometric Technician',
      company: 'Beyond 2020 Vision Specialists',
      duration: 'Aug 2022 - Oct 2023'
    }
  ];
  return (
    <div className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <Experience
          key={index}
          position={exp.position}
          company={exp.company}
          duration={exp.duration}
        />
      ))}
    </div>
  );
};
export default Experience;