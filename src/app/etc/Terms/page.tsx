import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Terms and Conditions</h1>
      <p className="mb-4 text-indigo-600 dark:text-white">
        Welcome to P-Show! These Terms and Conditions outline the rules and regulations for using the P-Show platform, a space where users can showcase their projects and connect with others.
      </p>
      <p className="mb-4 text-indigo-600 dark:text-white">
        By accessing and using P-Show, you agree to comply with these terms. If you do not agree with any of these terms, please do not use the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600 ">1. Definitions</h2>
      <ul className="list-disc list-inside mb-4 text-indigo-600 dark:text-white">
        <li><strong>"User"</strong>: Any individual or entity that accesses and uses the P-Show platform.</li>
        <li><strong>"Content"</strong>: Any projects, descriptions, images, videos, comments, or other materials uploaded by users to the platform.</li>
        <li><strong>"Platform"</strong>: The P-Show website and services provided through it.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600 ">2. User Accounts</h2>
      <ul className="list-disc list-inside mb-4 text-indigo-600 dark:text-white">
        <li><strong>Account Registration</strong>: Users must create an account to upload projects, connect with others, and access certain features. You are responsible for the confidentiality of your account information.</li>
        <li><strong>Account Information</strong>: All information provided during account registration must be accurate and up-to-date.</li>
        <li><strong>Account Termination</strong>: We reserve the right to suspend or terminate any account that violates these terms or engages in unauthorized activities.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600 ">3. User Responsibilities</h2>
      <ul className="list-disc list-inside mb-4 text-indigo-600 dark:text-white">
        <li><strong>Content Ownership</strong>: Users retain full ownership of the projects and content they upload. By uploading content, you grant P-Show a non-exclusive, royalty-free license to display, distribute, and promote your content on the platform.</li>
        <li><strong>Content Guidelines</strong>: All content must be original and must not infringe upon the rights of others. Content should be appropriate for all audiences and must comply with applicable laws.</li>
        <li><strong>Prohibited Activities</strong>: Users may not:
          <ul className="list-disc list-inside ml-6">
            <li>Post content that is offensive, illegal, or violates the rights of others.</li>
            <li>Engage in any behavior that disrupts the platform or harms other users.</li>
            <li>Attempt to access other users’ accounts or P-Show’s systems without authorization.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600 ">4. Connecting with Others</h2>
      <ul className="list-disc list-inside mb-4 text-indigo-600 dark:text-white">
        <li><strong>User Interactions</strong>: P-Show encourages collaboration and networking. However, users must interact respectfully and professionally. Harassment, spam, or any form of abusive behavior is strictly prohibited.</li>
        <li><strong>External Links</strong>: Users may share external links related to their projects. P-Show is not responsible for the content or privacy practices of external websites.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600 ">5. Intellectual Property</h2>
      <ul className="list-disc list-inside mb-4 text-indigo-600 dark:text-white">
        <li><strong>Platform Rights</strong>: The P-Show platform, including its design and functionality (excluding user-generated content), is owned by P-Show and protected by intellectual property laws.</li>
        <li><strong>User Content</strong>: Users may not reproduce, distribute, or create derivative works from the platform’s content without permission, except for their own content.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600 ">6. Privacy</h2>
      <ul className="list-disc list-inside mb-4 text-indigo-600 dark:text-white">
        <li><strong>Data Collection</strong>: We collect and process personal information in accordance with our Privacy Policy. By using P-Show, you agree to our data practices as outlined in the Privacy Policy.</li>
        <li><strong>Cookies</strong>: P-Show uses cookies to enhance the user experience. By using the platform, you consent to the use of cookies.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600 ">7. Limitation of Liability</h2>
      <ul className="list-disc list-inside mb-4 text-indigo-600 dark:text-white">
        <li><strong>Platform Access</strong>: We strive to ensure the platform’s availability but do not guarantee that it will be uninterrupted or error-free. P-Show reserves the right to modify or discontinue the platform at any time.</li>
        <li><strong>Content Responsibility</strong>: Users are responsible for the accuracy and legality of their content. P-Show is not liable for any content posted by users.</li>
        <li><strong>No Liability</strong>: P-Show and its affiliates are not liable for any damages resulting from the use or inability to use the platform.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600 ">8. Changes to Terms</h2>
      <p className="mb-4 text-indigo-600 dark:text-white">
        <strong>Modifications</strong>: We may update these terms from time to time. Significant changes will be communicated to users, and continued use of the platform constitutes acceptance of the updated terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600 ">9. Governing Law</h2>
      <p className="mb-4 text-indigo-600 dark:text-white">
        These terms are governed by and construed in accordance with the laws of <span className="font-semibold">[Your Jurisdiction]</span>, and any disputes will be resolved in the courts of <span className="font-semibold">[Your Jurisdiction]</span>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600 ">10. Contact Us</h2>
      <p className="mb-4 text-indigo-600 dark:text-white">
        If you have any questions or concerns about these terms, please contact us at:
      </p>
      <ul className="list-disc list-inside mb-4 text-indigo-600">
        <li><strong>Email</strong>: <span className="underline">jainishkoladiya33@gmail.com</span></li>
        <li><strong>Address</strong>: <span className="underline">sarthana jataknaka,surat</span></li>
      </ul>
    </div>
  );
}

export default TermsAndConditions;
