function Blog() {
  const articles = [
    {
      title: "AI in Recruitment",
      description:
        "How Artificial Intelligence is transforming sourcing, screening, and hiring top IT talent."
    },
    {
      title: "Advanced Boolean Search",
      description:
        "Techniques for finding highly qualified candidates across LinkedIn, Dice, Monster, and other platforms."
    },
    {
      title: "C2C vs W2 Hiring",
      description:
        "Understanding the advantages, challenges, and best practices for both hiring models."
    },
    {
      title: "Building Strong Vendor Partnerships",
      description:
        "Best practices for developing long-term relationships with clients, MSPs, and prime vendors."
    },
    {
      title: "Future of US IT Staffing",
      description:
        "Technology trends, AI adoption, and the evolving recruitment landscape."
    },
    {
      title: "Resume Screening with AI",
      description:
        "Using automation and machine learning to identify the right candidates faster."
    }
  ];

  return (
    <section
      id="blog"
      style={{
        background: "#111827",
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
        Recruitment Insights
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {articles.map((article, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
              border: "1px solid #334155",
            }}
          >
            <h3 style={{ color: "#38bdf8" }}>{article.title}</h3>

            <p
              style={{
                marginTop: "15px",
                lineHeight: "1.7",
                color: "#d1d5db",
              }}
            >
              {article.description}
            </p>

            <button
              style={{
                marginTop: "20px",
                background: "#38bdf8",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;