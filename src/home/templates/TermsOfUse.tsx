import React from 'react';
import { MainAbsoluteTop } from './partials/navbar/MainAbsoluteTop';
import { Footer } from './partials/footer/Footer';

const TermsOfUse = () => {
  return (
    <>
    <MainAbsoluteTop />
    <main id = "content" role = "main">
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Terms of Use</h1>
      <p>Last updated: February 2025</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website and services, you agree to be bound by these Terms of Use, including any additional terms and conditions that may apply to specific features or services. If you do not agree to these terms, please do not use our services.
        </p>
      </section>

      <section>
        <h2>2. Use of Services</h2>
        <p>
          Our services are intended for use by individuals seeking financial modeling, wealth management, and investment advice. You agree to use our services only for lawful purposes and in accordance with these terms.
        </p>
      </section>

      <section>
        <h2>3. User Responsibilities</h2>
        <p>
          You agree to:
        </p>
        <ul>
          <li>Provide accurate and complete information during account registration.</li>
          <li>Maintain the confidentiality of your account credentials.</li>
          <li>Notify us promptly of any unauthorized use of your account.</li>
        </ul>
      </section>

      <section>
        <h2>4. Prohibited Activities</h2>
        <p>
          You are prohibited from engaging in activities such as:
        </p>
        <ul>
          <li>Engaging in fraudulent, deceptive, or illegal practices.</li>
          <li>Accessing or using our services to harm, disrupt, or damage the functionality of our website or other users' experience.</li>
          <li>Attempting to reverse engineer or gain unauthorized access to our system.</li>
        </ul>
      </section>

      <section>
        <h2>5. Termination of Access</h2>
        <p>
          We reserve the right to suspend or terminate your access to our services at any time, without notice, if we believe that you have violated these Terms of Use or engaged in any prohibited activities.
        </p>
      </section>

      <section>
        <h2>6. Payment and Fees</h2>
        <p>
          Some of our services may require payment. You agree to pay all applicable fees associated with your use of our services. We may update our pricing and payment terms from time to time, and we will notify you of any changes.
        </p>
      </section>

      <section>
        <h2>7. Disclaimers</h2>
        <p>
          Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee the accuracy, reliability, or completeness of the financial information, models, or advice provided through our services.
        </p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          We are not liable for any damages arising out of or related to your use of our services, including but not limited to direct, indirect, incidental, or consequential damages.
        </p>
      </section>

      <section>
        <h2>9. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless [Your Company Name], its employees, partners, and affiliates from any claims, losses, liabilities, damages, or expenses arising out of your use of our services or your violation of these Terms of Use.
        </p>
      </section>

      <section>
        <h2>10. Governing Law</h2>
        <p>
          These terms will be governed by and construed in accordance with the laws of Your Jurisdiction. Any legal action or proceeding related to these terms shall be conducted in the courts of Your Jurisdiction.
        </p>
      </section>

      <section>
        <h2>11. Changes to These Terms</h2>
        <p>
          We may update these Terms of Use from time to time. We will notify you of any significant changes by posting the updated terms on our website, along with the date of the last update.
        </p>
      </section>

      <section>
        <h2>12. Contact Us</h2>
        <p>If you have any questions or concerns regarding these Terms of Use, please contact us at arjun@sustains.ai.</p>
      </section>
    </div>
    </main>
    <Footer />
    </>
  );
};

export default TermsOfUse;
