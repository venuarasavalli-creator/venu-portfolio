import { FaBriefcase, FaUsers, FaRobot, FaHandshake } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      style={{
        background: "#111827",
        color: "white",
        padding: "80px 10%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#38bdf8",
          marginBottom: "50px",
        }}
      >
        About Me
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src="/profile.jpg"
            alt="Venu Arasavalli"
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "5px solid #38bdf8",
            }}
          />

          <h3 style={{ marginTop: "20px" }}>Venu Arasavalli</h3>

          <p style={{ color: "#94a3b8" }}>
            Senior Resource Manager
          </p>
        </div>

        <div>
          <p
            style={{
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
            I have over 10 years of experience in US IT Staffing,
            Talent Acquisition, Client Management, Business Development,
            and Vendor Relations. My focus is on connecting top IT
            professionals with leading organizations while building
            long-term partnerships with clients and prime vendors.
          </p>

          <div
            style={{
              marginTop: "35px",
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "20px",
            }}
          >
            <div>
              <FaBriefcase size={30} color="#38bdf8" />
              <h4>IT Staffing</h4>
            </div>

            <div>
              <FaUsers size={30} color="#38bdf8" />
              <h4>Talent Acquisition</h4>
            </div>

            <div>
              <FaHandshake size={30} color="#38bdf8" />
              <h4>Vendor Partnerships</h4>
            </div>

            <div>
              <FaRobot size={30} color="#38bdf8" />
              <h4>AI Recruiting</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;