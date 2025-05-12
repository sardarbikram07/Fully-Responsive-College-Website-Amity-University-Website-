import React from 'react'
import './Pages.css'
import Title from '../Components/Title/Title'

const Privacy = () => {
  return (
    <div className="page-container">
      <Title subTitle="LEGAL" title="Privacy Policy" />
      <div className="legal-content">
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, including:</p>
        <ul>
          <li>Personal identification information (Name, email, phone number)</li>
          <li>Academic records and credentials</li>
          <li>Payment information</li>
          <li>Communication preferences</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>The information we collect is used for:</p>
        <ul>
          <li>Processing admissions and enrollments</li>
          <li>Providing educational services</li>
          <li>Communications about programs and events</li>
          <li>Administrative purposes</li>
        </ul>

        <h2>3. Information Security</h2>
        <p>We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>

        <h2>4. Data Sharing</h2>
        <p>We do not sell your personal information. We may share your information with:</p>
        <ul>
          <li>Educational partners for academic purposes</li>
          <li>Service providers who assist in our operations</li>
          <li>Government authorities when required by law</li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Request corrections to your data</li>
          <li>Opt-out of marketing communications</li>
          <li>Request deletion of your information</li>
        </ul>

        <h2>6. Contact Us</h2>
        <p>If you have questions about our privacy practices, please contact our privacy office.</p>
      </div>
    </div>
  )
}

export default Privacy