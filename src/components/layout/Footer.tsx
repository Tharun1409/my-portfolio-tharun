import { motion } from "framer-motion";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <motion.div
          className="footer-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="footer-name">Tharun</h2>
          <p className="footer-tagline">
            Frontend Developer crafting scalable and performant web experiences.
          </p>
        </motion.div>

        <motion.div
          className="footer-right"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a> */}

          <a
            href="https://www.linkedin.com/in/tharun-frontend/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>

          <a
            href="uppulatharun77@gmail.com"
            className="footer-link"
          >
            Email
          </a>

          <a
            href="/Tharun_Uppula_Resume-Upd.pdf"
            target="_blank"
            className="resume-btn"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Tharun. All rights reserved.
      </div>

      {/* Animated Glow */}
      <div className="footer-blob blob-a"></div>
      <div className="footer-blob blob-b"></div>
    </footer>
  );
}
