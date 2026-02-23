import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./experience.css";

const experiences = [
  {
    company: "Decode Solutions",
    role: "React Frontend Developer",
    duration: "Nov-1-2024 -- June-30-2025",
    title: "Enterprise Analytics Dashboard & Workflow Platform",
    points: [
      "Designed scalable analytics dashboards for real-time KPI monitoring",
      "Built 20+ reusable UI components",
      "Improved load time by ~25% via memoization & lazy loading",
      "Implemented dark/light theme & multi-language support",
      "Followed modular architecture & GitFlow workflow",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "React Flow",
      "React Query",
      "Axios",
      "Vite",
      "Git",
    ],
  },
  {
    company: "Tanama Software",
    role: "React Web Developer",
    duration: "May-02-2023 -- Sep-27-2024",
    title:  "Multi-Module E-Commerce Web Platform for Order Processing & Inventory Operations",
    points: [
      "Developed Dashboard, Picking, Staging & Dispense modules",
      "Optimized large table rendering performance",
      "Built reusable form components",
      "Improved API error handling & loading states",
      "Restructured state using Context API",
    ],
    tech: [
      "React.js",
      "JavaScript",
      "Material UI",
      "REST APIs",
      "Axios",
      "Context API",
      "Custom Hooks",
      "Node.js",
      "Axios",
      "Git",
    ],
  },
];

const practices = [
  "Component-level memoization",
  "Route-based code splitting",
  "Centralized API service architecture",
  "Modular folder structure",
  "ESLint & Prettier enforced",
  "Agile sprint methodology",
  "GitFlow branching & PR reviews",
];

export default function Experience() {

  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_a7p4bkk",
        "template_huat82i",
        form,
        "qaKnsin3xg9szMTs4"
      )
      .then(() => {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
   <section className="section dark">

      {/* EXPERIENCE */}
      <div className="container">
        <h2 className="section-title">Experience</h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="exp-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="exp-header">
              <div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-role">{exp.role}</div>
              </div>
              <div className="exp-duration">{exp.duration}</div>
            </div>

            <div className="exp-title">{exp.title}</div>

            <ul className="exp-points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="tech-badges">
              {exp.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* TECHNICAL PRACTICES */}
      <div className="container">
        <h2 className="section-title">Technical Practices</h2>

        <div className="practice-grid">
          {practices.map((item, index) => (
            <motion.div
              key={index}
              className="practice-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>


      {/* Animated Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* CONTACT */}
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <motion.form
          onSubmit={handleSubmit}
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <div style={{ position: "relative" }}>
  <textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    maxLength={300}
    value={form.message}
    onChange={handleChange}
    required
    style={{
      width: "100%",
      resize: "none",
      padding: "12px",
    }}
  />
  <div
    style={{
      textAlign: "right",
      fontSize: "12px",
      color: "#888",
      marginTop: "4px",
    }}
  >
    {form.message.length}/300
  </div>
</div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </motion.form>
      </div>
       {/* SUCCESS POPUP */}
      {success && (
        <motion.div
          className="success-popup"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ✅ Message Sent Successfully!
        </motion.div>
      )}
    </section>
  );
}
