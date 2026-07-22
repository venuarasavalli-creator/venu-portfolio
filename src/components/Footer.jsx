import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "#cbd5e1",
        padding: "50px 10%",
        textAlign: "center",
        borderTop: "1px solid #334155",
      }}
    >
      <h2 style={{ color: "#38bdf8" }}>
        Venu Arasavalli
      </h2>

      <p style={{ marginTop: "10px" }}>
        Senior Resource Manager | US IT Staffing | AI Recruiting &
        Automation Enthusiast
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "25px",
          fontSize: "28px",
        }}
      >
        <a
          href="https://www.linkedin.com/in/venuarasavalli/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#38bdf8" }}
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:your@email.com"
          style={{ color: "#38bdf8" }}
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/venuarasavalli-creator"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#38bdf8" }}
        >
          <FaGithub />
        </a>
      </div>

      <hr
        style={{
          margin: "30px 0",
          borderColor: "#334155",
        }}
      />

      <p>
        © {new Date().getFullYear()} Venu Arasavalli. All Rights Reserved.
      </p>

      <p style={{ marginTop: "10px", color: "#94a3b8" }}>
        Built with React • Vite • JavaScript
      </p>
    </footer>
  );
}

export default Footer;