import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      school: 'University of South Florida',
      degree: 'Bachelor of Science in BAIS & Bachelor of Science in Finance',
      years: '2022 - 2025'
    },
  ];
  return (
    <div className="education">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="education">
          <h3>{edu.school}</h3>
          <p>{edu.degree}</p>
          <p>{edu.years}</p>
        </div>
      ))}
    </div>
  );
};
export default Education;