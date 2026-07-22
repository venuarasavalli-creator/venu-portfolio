function Experience() {
  const experiences = [
    {
      year: "May 2017 – May 2021",
      role: "IT Recruiter",
      company: "Astek IT Solutions",
      description:
        "Started my career in US IT Staffing with Astek IT Solutions. Specialized in sourcing, screening, interviewing, and recruiting IT professionals across technologies such as Java, .NET, QA, Data Engineering, DevOps, Cloud, and Full Stack Development. Worked closely with candidates and hiring managers to ensure successful placements while maintaining strong delivery quality.",
    },
    {
      year: "May 2021 – May 2025",
      role: "Lead IT Recruiter",
      company: "Sai Technologies LLC",
      description:
        "Managed end-to-end recruitment for Direct Clients, Prime Vendors, and Implementation Partners across the United States. Built strong vendor relationships, supported C2C and W2 hiring, handled candidate negotiations, coordinated interview processes, and consistently delivered high-quality consultants across multiple technologies.",
    },
    {
      year: "May 2025 – Present",
      role: "Senior Resource Manager",
      company: "V-Soft Consulting Group, Inc.",
      description:
        "Leading strategic recruiting initiatives, client engagement, talent acquisition, and business development. Managing C2C and W2 staffing, strengthening relationships with clients and prime vendors, and contributing to AI-driven recruitment initiatives while supporting enterprise hiring across diverse technology domains.",
    },
  ];

  return (
    <section
      id="experience"
      style={{
        background: "#020617",
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
        Professional Experience
      </h2>

      {experiences.map((job, index) => (
        <div
          key={index}
          style={{
            background: "#1e293b",
            marginBottom: "30px",
            padding: "30px",
            borderRadius: "15px",
            borderLeft: "6px solid #38bdf8",
            boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
          }}
        >
          <p
            style={{
              color: "#38bdf8",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {job.year}
          </p>

          <h3
            style={{
              fontSize: "28px",
              marginBottom: "5px",
            }}
          >
            {job.role}
          </h3>

          <h4
            style={{
              color: "#cbd5e1",
              marginBottom: "20px",
            }}
          >
            {job.company}
          </h4>

          <p
            style={{
              lineHeight: "1.8",
              color: "#d1d5db",
            }}
          >
            {job.description}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Experience;