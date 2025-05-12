import React, { useState } from 'react'
import './Programs.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'

import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  // Change from single state to an object that tracks multiple expanded programs
  const [expandedPrograms, setExpandedPrograms] = useState({
    graduation: false,
    masters: false,
    postgrad: false
  });

  const programDetails = {
    graduation: {
      title: "Undergraduate Excellence",
      description: "Embark on a transformative journey with our comprehensive undergraduate programs designed to shape future leaders.",
      points: [
        "4-year undergraduate programs with hands-on learning",
        "Multiple specializations aligned with industry demands",
        "Cutting-edge curriculum developed with industry experts",
        "Guaranteed internship opportunities with leading organizations",
        "Access to state-of-the-art laboratories and research facilities"
      ]
    },
    masters: {
      title: "Advanced Mastery",
      description: "Advance your career with our specialized master's programs that combine academic excellence with practical expertise.",
      points: [
        "2-year specialized programs with flexible learning options",
        "Cutting-edge research opportunities with published faculty",
        "Strategic industry partnerships for real-world projects",
        "Advanced learning modules with personalized mentorship",
        "Expert faculty guidance from industry veterans and scholars"
      ]
    },
    postgrad: {
      title: "Doctoral Innovation",
      description: "Push the boundaries of knowledge with our doctoral programs focused on groundbreaking research and academic excellence.",
      points: [
        "Fully-funded doctoral programs with stipend opportunities",
        "Prestigious research fellowships and publication support",
        "Comprehensive publication and conference presentation support",
        "International collaborations with renowned global institutions",
        "Access to advanced research facilities and innovation labs"
      ]
    }
  };

  const toggleExpand = (program) => {
    // Update only the selected program's state without affecting others
    setExpandedPrograms(prevState => ({
      ...prevState, // Keep previous state for all other programs
      [program]: !prevState[program] // Toggle only the clicked program
    }));
  };

  return (
    <div className='programs-container'>
      <div className='programs-header'>
        <h2>Our Academic Programs</h2>
        <p>Discover educational pathways designed for your success</p>
      </div>
      
      <div className='programs'>
        {/* Graduation Program */}
        <div className={`program ${expandedPrograms.graduation ? 'expanded' : ''}`}>
          <div className="program-content" onClick={() => toggleExpand('graduation')}>
            <img src={program1} alt="Graduation Program" />
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <p>Undergraduate Programs</p>
            </div>
          </div>
          <div className="program-details">
            <h3 className="program-title">{programDetails.graduation.title}</h3>
            <p className="program-description">{programDetails.graduation.description}</p>
            
            <ul className="program-points">
              {programDetails.graduation.points.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>

        {/* Masters Program */}
        <div className={`program ${expandedPrograms.masters ? 'expanded' : ''}`}>
          <div className="program-content" onClick={() => toggleExpand('masters')}>
            <img src={program2} alt="Masters Program" />
            <div className="caption">
              <img src={program_icon_2} alt="" />
              <p>Master's Programs</p>
            </div>
          </div>
          <div className="program-details">
            <h3 className="program-title">{programDetails.masters.title}</h3>
            <p className="program-description">{programDetails.masters.description}</p>
            
            <ul className="program-points">
              {programDetails.masters.points.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>

        {/* Post Graduation Program */}
        <div className={`program ${expandedPrograms.postgrad ? 'expanded' : ''}`}>
          <div className="program-content" onClick={() => toggleExpand('postgrad')}>
            <img src={program3} alt="Post Graduation Program" />
            <div className="caption">
              <img src={program_icon_3} alt="" />
              <p>Doctoral Programs</p>
            </div>
          </div>
          <div className="program-details">
            <h3 className="program-title">{programDetails.postgrad.title}</h3>
            <p className="program-description">{programDetails.postgrad.description}</p>
            
            <ul className="program-points">
              {programDetails.postgrad.points.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs