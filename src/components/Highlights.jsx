function Highlights() {
  const cards = [
    {
      title: "10+ Years",
      subtitle: "Experience",
      text: "Extensive experience in US IT Staffing, Recruitment, and Talent Acquisition."
    },
    {
      title: "100+",
      subtitle: "IT Professionals Placed",
      text: "Successfully placed consultants across Fortune 500 companies and growing organizations."
    },
    {
      title: "Excellent",
      subtitle: "Client & Prime Vendor Partnerships",
      text: "Strong relationships with Direct Clients, MSPs, and Prime Vendors across the United States."
    },
    {
      title: "AI",
      subtitle: "Recruiting & Automation",
      text: "Building AI solutions to automate sourcing, resume screening, and candidate matching."
    }
  ];

  return (
    <section
      style={{
        padding: "80px 8%",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
          color: "#38bdf8",
        }}
      >
        Professional Highlights
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "15px",
              border: "1px solid #334155",
            }}
          >
            <h1
              style={{
                color: "#38bdf8",
                fontSize: "40px",
                marginBottom: "10px",
              }}
            >
              {card.title}
            </h1>

            <h3>{card.subtitle}</h3>

            <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;