import React from 'react';
import './TermsAndConditions.css';

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      
      <p>Welcome to our telemedicine app. By accessing or using our app, you agree to be bound by these Terms and Conditions. Please read them carefully.</p>

      <h2>1. Introduction</h2>
      <p>This document outlines the terms and conditions for using our telemedicine app. By accessing and using the app, you acknowledge and agree to abide by these terms. If you do not agree to these terms, you may not use the app.</p>
      
      <h2>2. User Obligations</h2>
      <p>As a user of our telemedicine app, you agree to use the app responsibly and ethically. You must:
        <ul>
          <li>Be at least 18 years of age or have consent from a legal guardian.</li>
          <li>Provide accurate and truthful information when setting up an account or providing health details.</li>
          <li>Use the app only for lawful purposes and in accordance with these Terms and Conditions.</li>
        </ul>
        You are strictly prohibited from:
        <ul>
          <li>Impersonating another person or entity.</li>
          <li>Interfering with or disrupting the app’s services or systems.</li>
          <li>Using the app to transmit any harmful, offensive, or illegal content.</li>
        </ul>
      </p>
      
      <h2>3. Privacy</h2>
      <p>We are committed to protecting your privacy. Your personal information will be handled in accordance with our Privacy Policy, which can be found <a href="/privacy-policy">here</a>. By using this app, you agree to the collection and use of information as described in our Privacy Policy.</p>
      
      <h2>4. Account Policies</h2>
      <p>Users are responsible for maintaining the confidentiality of their account information, including their password. You agree to notify us immediately of any unauthorized access or use of your account. We reserve the right to suspend or terminate your account if we suspect any violation of these terms.</p>
      
      <h2>5. Health Disclaimer</h2>
      <p>Our telemedicine app provides information and connects you with healthcare providers for assistance. However, it is not a substitute for in-person medical consultations or emergency services. Always seek the advice of qualified health professionals for serious health concerns.</p>
      
      <h2>6. Liability Limitations</h2>
      <p>While we strive to provide high-quality service, our app is provided on an “as is” basis, and we do not guarantee uninterrupted access or error-free functionality. We are not liable for any indirect, incidental, or consequential damages arising from the use of the app.</p>
      
      <h2>7. Governing Law</h2>
      <p>These Terms and Conditions are governed by the laws of [Your Country]. By using the app, you consent to the jurisdiction of the courts in [Your Country] in the event of any disputes arising from these terms.</p>
      
      <h2>8. Changes to Terms</h2>
      <p>We may update these Terms and Conditions occasionally to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and users are encouraged to review these terms periodically.</p>
      
      <h2>9. Contact Information</h2>
      <p>If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@telemedicineapp.com">support@telemedicineapp.com</a>.</p>
    </div>
  );
}

export default TermsAndConditions;
