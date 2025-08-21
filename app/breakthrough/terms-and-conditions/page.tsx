'use client'
import React from 'react';
import styles from './terms-and-conditions.module.css';

export default function TermsAndConditions() {
    return (
        <div className={styles.container}>
            <h1>Terms and Conditions</h1>
            
            <p>Welcome to BreakThrough. Please read these terms and conditions carefully before using our application.</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the BreakThrough application, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our application.</p>
            
            <h2>2. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will provide notice of any significant changes. Your continued use of the application following any changes indicates your acceptance of the new terms.</p>
            
            <h2>3. User Accounts</h2>
            <p>To use certain features of our application, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
            
            <h2>4. User Conduct</h2>
            <p>You agree not to use the application to:</p>
            <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Upload or transmit viruses or any other malicious code</li>
                <li>Interfere with the proper functioning of the application</li>
                <li>Collect or store personal data about other users without their consent</li>
            </ul>
            
            <h2>5. Intellectual Property</h2>
            <p>All content, features, and functionality of the BreakThrough application, including but not limited to text, graphics, logos, and software, are owned by BreakThrough and are protected by intellectual property laws.</p>
            
            <h2>6. Disclaimers</h2>
            <p>The application is provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not warrant that the application will be error-free or uninterrupted.</p>
            
            <h2>7. Limitation of Liability</h2>
            <p>In no event shall BreakThrough be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the application.</p>
            
            <h2>8. Termination</h2>
            <p>We reserve the right to terminate or suspend your account and access to the application at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or us.</p>
            
            <h2>9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of West Bengal, without regard to its conflict of law provisions.</p>
            
            <h2>10. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at finsedsoft@gmail.com.</p>
            
            <p className={styles.lastUpdated}>Last Updated: Aug 21, 2025</p>
        </div>
    );
}