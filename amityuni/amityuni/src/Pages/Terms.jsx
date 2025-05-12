import React from 'react'
import './Pages.css'
import Title from '../Components/Title/Title'

const Terms = () => {
  return (
    <div className="page-container">
      <Title subTitle="LEGAL" title="Terms of Service" />
      <div className="legal-content">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.</p>

        <h2>2. Educational Services</h2>
        <p>Our institution provides educational services subject to the following conditions:</p>
        <ul>
          <li>Admission is subject to meeting eligibility criteria</li>
          <li>Payment of fees as per the schedule</li>
          <li>Compliance with attendance requirements</li>
          <li>Adherence to academic integrity policies</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>All content on this website is the property of our institution and is protected by copyright laws.</p>

        <h2>4. User Conduct</h2>
        <p>Users agree to conduct themselves in a manner consistent with academic integrity and institutional values.</p>

        <h2>5. Privacy Policy</h2>
        <p>Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.</p>

        <h2>6. Modifications</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of modified terms.</p>
      </div>
    </div>
  )
}

export default Terms