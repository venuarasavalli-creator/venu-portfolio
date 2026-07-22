function Projects() {
  const projects = [
    {
      title: "VRecruit AI",
      description:
        "An AI-powered recruitment platform designed to automate resume parsing, candidate screening, job matching, ATS management, and recruitment analytics.",
      features: [
        "AI Resume Parser",
        "Smart Candidate Matching",
        "ATS Dashboard",
        "Resume Categorization",
        "Recruitment Analytics",
        "AI Job Matching",
      ],
    },
  ];

  return (
    <section
      id="projects"
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
        Featured Project
      </h2>

      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            background: "#1e293b",
            padding: "35px",
            borderRadius: "15px",
            border: "1px solid #334155",
          }}
        >
          <h2 style={{ color: "#38bdf8" }}>{project.title}</h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
              color: "#d1d5db",
            }}
          >
            {project.description}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            {project.features.map((feature, i) => (
              <div
                key={i}
                style={{
                  background: "#0f172a",
                  padding: "15px",
                  borderRadius: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;