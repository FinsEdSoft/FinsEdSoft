'use client'
import React from 'react';
import styles from './privacy-policy.module.css';

export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <h1>Privacy Policy: BreakThrough</h1>
            <div className={styles.lastUpdated}>Last Updated: Aug 21, 2025</div>
            
            <div className={styles.section}>
                <p>Welcome to BreakThrough (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.</p>
                <p>Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the application.</p>
            </div>
            
            <div className={styles.section}>
                <h2>Information We Collect</h2>
                <p>We may collect information about you in various ways when you use our application:</p>
                <ul>
                    <li><strong>Personal Data:</strong> While using our application, we may ask you to provide certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to, your name, email address, and phone number.</li>
                    <li><strong>Usage Data:</strong> We may also collect information on how the application is accessed and used. This may include information such as your device&apos;s Internet Protocol address, browser type, pages visited, time and date of your visit, time spent on those pages, and other diagnostic data.</li>
                    <li><strong>Device Data:</strong> We collect information about your device, including the device type, operating system, unique device identifiers, and mobile network information.</li>
                </ul>
            </div>
            
            <div className={styles.section}>
                <h2>How We Use Your Information</h2>
                <p>We may use the information we collect for various purposes, including to:</p>
                <ul>
                    <li>Provide and maintain our application</li>
                    <li>Notify you about changes to our application</li>
                    <li>Allow you to participate in interactive features when you choose to do so</li>
                    <li>Provide customer support</li>
                    <li>Gather analysis or valuable information to improve our application</li>
                    <li>Monitor the usage of our application</li>
                    <li>Detect, prevent, and address technical issues</li>
                </ul>
            </div>
            
            <div className={styles.section}>
                <h2>Disclosure of Your Information</h2>
                <p>We may disclose your personal information in the following situations:</p>
                <ul>
                    <li><strong>Service Providers:</strong> We may employ third-party companies and individuals to facilitate our application, provide the application on our behalf, perform application-related services, or assist us in analyzing how our application is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose your personal information if required to do so by law or in response to valid requests by public authorities.</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your personal information may be transferred.</li>
                    <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
                </ul>
            </div>
            
            <div className={styles.section}>
                <h2>Security of Your Information</h2>
                <p>The security of your information is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
            </div>
            
            <div className={styles.section}>
                <h2>Your Data Protection Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul>
                    <li>The right to access, update, or delete your information</li>
                    <li>The right to rectification if your information is inaccurate or incomplete</li>
                    <li>The right to object to our processing of your personal information</li>
                    <li>The right of restriction, meaning you can request we restrict the processing of your personal information</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent at any time where we relied on your consent to process your personal information</li>
                </ul>
            </div>
            
            <div className={styles.section}>
                <h2>Children&apos;s Privacy</h2>
                <p>Our application is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we will immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.</p>
            </div>
            
            <div className={styles.section}>
                <h2>Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top of this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            </div>
            
            <div className={styles.section}>
                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p>Email: finsedsoft@gmail.com</p>
                <p>Address: Durgapur, West Bengal 713213, India</p>
            </div>
        </div>
    );
}