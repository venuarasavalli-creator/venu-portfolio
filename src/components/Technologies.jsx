function Technologies() {
  const technologies = [
    "Java",
    ".NET",
    "Python",
    "Data Engineering",
    "DevOps",
    "AWS",
    "Azure",
    "Google Cloud",
    "React",
    "Angular",
    "Node.js",
    "Salesforce",
    "ServiceNow",
    "SAP",
    "QA Automation",
    "Cyber Security",
    "AI / Machine Learning",
    "Business Intelligence",
  ];

  return (
    <section
      id="technologies"
      style={{
        background: "#020617",
        color: "white",
        padding: "80px 10%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#38bdf8",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        Technology Expertise
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "20px",
        }}
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "25px",
              textAlign: "center",
              borderRadius: "12px",
              border: "1px solid #334155",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;