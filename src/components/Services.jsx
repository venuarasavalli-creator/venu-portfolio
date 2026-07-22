import {
  FaUsers,
  FaHandshake,
  FaBriefcase,
  FaUserTie,
  FaRobot,
  FaSearch,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaUsers size={35} color="#38bdf8" />,
      title: "IT Staffing",
      description: "Providing top IT professionals for contract, permanent, and project-based hiring.",
    },
    {
      icon: <FaHandshake size={35} color="#38bdf8" />,
      title: "Vendor Partnerships",
      description: "Building long-term relationships with direct clients, MSPs, and prime vendors.",
    },
    {
      icon: <FaBriefcase size={35} color="#38bdf8" />,
      title: "C2C & W2 Hiring",
      description: "Specialized recruitment for Corp-to-Corp and W2 employment models.",
    },
    {
      icon: <FaUserTie size={35} color="#38bdf8" />,
      title: "Talent Acquisition",
      description: "Identifying, engaging, and hiring highly skilled technology professionals.",
    },
    {
      icon: <FaRobot size={35} color="#38bdf8" />,
      title: "AI Recruiting",
      description: "Leveraging AI to streamline sourcing, screening, and candidate matching.",
    },
    {
      icon: <FaSearch size={35} color="#38bdf8" />,
      title: "Executive Search",
      description: "Helping organizations recruit senior technical and leadership professionals.",
    },
  ];

  return (
    <section
      id="services"
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
        Core Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "15px",
              border: "1px solid #334155",
            }}
          >
            {service.icon}
            <h3 style={{ marginTop: "20px" }}>{service.title}</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;