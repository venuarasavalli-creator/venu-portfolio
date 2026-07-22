import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        background: "#020617",
        color: "white",
        padding: "18px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #1e293b",
        zIndex: 1000,
      }}
    >
      <div>
        <h2 style={{ color: "#38bdf8" }}>Venu Arasavalli</h2>
        <small>Senior Resource Manager</small>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Insights</a>
        <a href="#contact">Contact</a>

        <a
          href="https://www.linkedin.com/in/venuarasavalli/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://github.com/venuarasavalli-creator"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          <FaGithub size={22} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;