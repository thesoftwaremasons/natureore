import React from "react";

const PRIMARY_COLOR = "#34d399"; // emerald-400
const BACKGROUND_COLOR = "#fff";

const sectionStyle: React.CSSProperties = {
    background: "#f9fafb",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(52, 211, 153, 0.08)",
    padding: "2rem",
    marginBottom: "2rem",
    border: `1px solid #e5e7eb`,
};

const headingStyle: React.CSSProperties = {
    color: PRIMARY_COLOR,
    marginBottom: "0.75rem",
    fontWeight: 600,
    fontSize: "1.35rem",
    letterSpacing: "0.01em",
};

const TermsOfService: React.FC = () => (
    <main
        style={{
            maxWidth: 820,
            margin: "0 auto",
            padding: "3rem 1.5rem",
            background: BACKGROUND_COLOR,
            minHeight: "100vh",
        }}
    >
        <h1
            style={{
                fontSize: "2.7rem",
                marginBottom: "0.5rem",
                color: "#022c22",
                fontWeight: 700,
                letterSpacing: "-0.02em",
            }}
        >
            Terms of Service
        </h1>
        <p style={{ color: "#6b7280", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
            Last updated: June 2024
        </p>

        <section style={sectionStyle}>
            <h2 style={headingStyle}>1. Acceptance of Terms</h2>
            <p style={{ color: "#334155", lineHeight: 1.7 }}>
                By accessing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
        </section>

        <section style={sectionStyle}>
            <h2 style={headingStyle}>2. Use License</h2>
            <p style={{ color: "#334155", lineHeight: 1.7 }}>
                Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
        </section>

        <section style={sectionStyle}>
            <h2 style={headingStyle}>3. Disclaimer</h2>
            <p style={{ color: "#334155", lineHeight: 1.7 }}>
                The materials on this website are provided &quot;as is&quot;. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
            </p>
        </section>

        <section style={sectionStyle}>
            <h2 style={headingStyle}>4. Limitations</h2>
            <p style={{ color: "#334155", lineHeight: 1.7 }}>
                In no event shall the website or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.
            </p>
        </section>

        <section style={sectionStyle}>
            <h2 style={headingStyle}>5. Modifications</h2>
            <p style={{ color: "#334155", lineHeight: 1.7 }}>
                We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
        </section>

        <section style={sectionStyle}>
            <h2 style={headingStyle}>6. Governing Law</h2>
            <p style={{ color: "#334155", lineHeight: 1.7 }}>
                These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
        </section>
    </main>
);

export default TermsOfService;