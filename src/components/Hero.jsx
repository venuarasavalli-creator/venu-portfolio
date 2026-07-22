import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        background: "#020617",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ maxWidth: "650px" }}>
        <h3 style={{ color: "#38bdf8" }}>
          Welcome to My Portfolio
        </h3>

        <h1 style={{ fontSize: "60px", marginTop: "15px" }}>
          Venu Arasavalli
        </h1>

        <h2 style={{ color: "#cbd5e1" }}>
          Senior Resource Manager | US IT Staffing
        </h2>

        <p
          style={{
            marginTop: "25px",
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          10+ years of experience in US IT Staffing, Talent Acquisition,
          Business Development, Client Management, and AI-powered Recruiting.
        </p>

        <div style={{ marginTop: "35px" }}>
          <button
            style={{
              background: "#38bdf8",
              padding: "15px 35px",
              border: "none",
              borderRadius: "8px",
              marginRight: "20px",
              cursor: "pointer",
            }}
          >
            Hire Me
          </button>

          <button
            style={{
              background: "transparent",
              border: "2px solid #38bdf8",
              color: "white",
              padding: "15px 35px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Download Resume
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "35px",
            fontSize: "28px",
          }}
        >
          <FaLinkedin />
          <FaEnvelope />
        </div>
      </div>

      <div>
        <img
          src="/profile.jpg"
          alt="Venu Arasavalli"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid #38bdf8",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;