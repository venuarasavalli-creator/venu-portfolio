import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaBuilding } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
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
        Let's Connect
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
        }}
      >
        <div>
          <h3 style={{ color: "#38bdf8" }}>Contact Information</h3>

          <div style={{ marginTop: "30px", lineHeight: "2.2" }}>
            <p><FaBuilding /> <strong>Company:</strong> V-Soft Consulting Group, Inc.</p>

            <p><FaEnvelope /> <strong>Email:</strong> venuarasavalli@gmail.com</p>

            <p><FaPhoneAlt /> <strong>Phone:</strong> +91 991-255-8814</p>

            <p><FaLinkedin /> <strong>LinkedIn:</strong> linkedin.com/in/venuarasavalli</p>
          </div>

          <button
            style={{
              marginTop: "30px",
              background: "#38bdf8",
              border: "none",
              padding: "15px 30px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Download Resume
          </button>
        </div>

        <div>
          <h3 style={{ color: "#38bdf8" }}>Send a Message</h3>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: "none",
              }}
            />

            <input
              type="email"
              placeholder="Your Email"
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: "none",
              }}
            />

            <input
              type="text"
              placeholder="Company"
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: "none",
              }}
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: "none",
              }}
            ></textarea>

            <button
              style={{
                background: "#38bdf8",
                padding: "15px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;