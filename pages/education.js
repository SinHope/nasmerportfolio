import React from 'react';
import { useState } from 'react';

const Education = () => {
  
  const [showMarketingDetails, setShowMarketingDetails] = useState(false)
  const [showOLevelDetails, setShowOLevelDetails] = useState(false)

  const toggleDetails = (id) => {
    if (id === 'marketing') {
      setShowMarketingDetails(!showMarketingDetails)
    } else if (id === 'o-levels') {
      setShowOLevelDetails(!showOLevelDetails)
    }
  }

  return (
    <div className="motion-safe:animate-fadeIn">
      <h4 className="italic">**Click on each sub-section to toggle the visibility of the details.**</h4>
      <h1 onClick={() => toggleDetails('marketing')} className="cursor-pointer transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-center font-semibold border-solid border-2 border-violet-900 rounded-full w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">Diploma in Marketing</h1>
      {showMarketingDetails && (
        <div>
          <h3>Graduated From Temasek Polytechnic</h3>
          <h3>High appraisal from internship company. Asked me to come back to work for them but I declined</h3>
        </div>
      )}
      <h1 onClick={() => toggleDetails('o-levels')} className="cursor-pointer transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110text-center font-semibold border-solid border-2 border-violet-900 rounded-full w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">'O' Levels Singapore Cambridge</h1>
      {showOLevelDetails && (
        <div>
          <h3>Graduated From Changkat Changi Secondary School</h3>
          <h3>Grade A2 for Co-Curricular Activity, Military Band</h3>
          <h3>Awarded ' Silver ' at the Singapore Youth Festival Central Judging 2009</h3>
          <h3>Good Progress Award</h3>
        </div>
      )}
    </div>
  )
}

export default Education;