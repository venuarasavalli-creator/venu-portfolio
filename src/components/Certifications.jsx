function Certifications() {
  const certifications = [
    {
      title: "LinkedIn Learning",
      description: "Completed multiple professional certifications in recruiting, business development, and technology."
    },
    {
      title: "AI for Recruiting",
      description: "Applied AI tools and automation techniques to modern recruitment workflows."
    },
    {
      title: "Boolean Search",
      description: "Advanced sourcing strategies using Boolean search across LinkedIn, Dice, Monster, and other platforms."
    },
    {
      title: "Talent Acquisition",
      description: "Expertise in sourcing, interviewing, and hiring top technology professionals."
    },
    {
      title: "Business Development",
      description: "Building strong client relationships and expanding staffing partnerships."
    },
    {
      title: "Recruitment Automation",
      description: "Designing AI-driven workflows to improve recruiter productivity and hiring efficiency."
    },
  ];

  return (
    <section
      id="certifications"
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
        Certifications & Professional Development
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {certifications.map((cert, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "15px",
              border: "1px solid #334155",
            }}
          >
            <h3 style={{ color: "#38bdf8" }}>{cert.title}</h3>

            <p
              style={{
                marginTop: "15px",
                color: "#d1d5db",
                lineHeight: "1.7",
              }}
            >
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;