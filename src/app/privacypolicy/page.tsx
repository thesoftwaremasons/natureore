import React from "react";

const PRIMARY_COLOR = "#34d399"; // emerald-400
const BACKGROUND_COLOR = "#fff";

const sectionStyle: React.CSSProperties = {
    marginBottom: "2rem",
};

const headingStyle: React.CSSProperties = {
    color: PRIMARY_COLOR,
    marginBottom: "1rem",
    fontWeight: 700,
    fontSize: "2.25rem",
    letterSpacing: "-0.5px",
};

const subHeadingStyle: React.CSSProperties = {
    color: "#059669", // emerald-600 for subheadings
    marginTop: "2rem",
    marginBottom: "0.75rem",
    fontWeight: 600,
    fontSize: "1.25rem",
};

const listStyle: React.CSSProperties = {
    paddingLeft: "1.5rem",
    marginBottom: "1rem",
    color: "#374151", // gray-700
    lineHeight: 1.7,
};

const cardStyle: React.CSSProperties = {
    background: BACKGROUND_COLOR,
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(52, 211, 153, 0.10)",
    padding: "2.5rem",
    maxWidth: 800,
    margin: "2.5rem auto",
    border: `1px solid #d1fae5`, // emerald-100
};

const mainStyle: React.CSSProperties = {
    background: "#f3f4f6", // gray-100
    minHeight: "100vh",
    padding: "3rem 0",
};

const textStyle: React.CSSProperties = {
    marginBottom: "2rem",
    color: "#374151", // gray-700
    fontSize: "1.05rem",
    lineHeight: 1.7,
};

const linkStyle: React.CSSProperties = {
    color: PRIMARY_COLOR,
    textDecoration: "underline",
    fontWeight: 500,
};

const PrivacyPolicy: React.FC = () => (
    <main style={mainStyle}>
        <section style={cardStyle}>
            <h1 style={headingStyle}>Privacy Policy</h1>
            <p style={textStyle}>
                At NatureOre, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
            </p>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>Information We Collect</h2>
                <ul style={listStyle}>
                    <li>
                        <strong>Personal Information:</strong> We may collect personal information such as your name, email address, and contact details when you interact with our site.
                    </li>
                    <li>
                        <strong>Usage Data:</strong> We collect information about how you use our website, including your IP address, browser type, and pages visited.
                    </li>
                </ul>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>How We Use Your Information</h2>
                <ul style={listStyle}>
                    <li>To provide and maintain our services</li>
                    <li>To improve user experience</li>
                    <li>To communicate with you about updates or offers</li>
                    <li>To comply with legal obligations</li>
                </ul>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>Cookies</h2>
                <p style={textStyle}>
                    We use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect site functionality.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>Third-Party Services</h2>
                <p style={textStyle}>
                    We may use third-party services for analytics or payment processing. These services have their own privacy policies.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>Data Security</h2>
                <p style={textStyle}>
                    We implement reasonable measures to protect your information, but no method of transmission over the Internet is 100% secure.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>Your Rights</h2>
                <p style={textStyle}>
                    You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>Changes to This Policy</h2>
                <p style={textStyle}>
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>Contact Us</h2>
                <p style={textStyle}>
                    If you have any questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:support@natureore.com" style={linkStyle}>
                        support@natureore.com
                    </a>.
                </p>
            </div>
        </section>
    </main>
);

export default PrivacyPolicy;