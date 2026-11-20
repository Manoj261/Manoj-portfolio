import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUpRight, Cloud, Code2, GraduationCap,
  Layers3, Mail, Menu, X, Smartphone, Phone, MapPin, FileText, Link as LinkIcon
} from "lucide-react";
import "./styles.css";

const education = [
  {
    date: "2021 – 2025",
    title: "B.Tech — Computer Science and Engineering (Internet of Things)",
    institution: "Vasireddy Venkatadri Institute of Technology",
    result: "GPA: 7.52",
  },
  {
    date: "2019 – 2021",
    title: "Intermediate — MPC",
    institution: "Sri Chaitanya Junior College",
    result: "Percentage: 95%",
  },
  {
    date: "2018 – 2019",
    title: "SSC",
    institution: "St. Xavier's Global School",
    result: "GPA: 10",
  },
];

const projects = [
  {
    number: "01",
    type: "DEVOPS • JULY 2026",
    title: "End-to-End DevOps Pipeline with Kubernetes",
    description:
      "Built a CI/CD workflow with GitHub, Jenkins, Docker, and Kubernetes. Automated build and deployment stages and created Kubernetes manifests for application deployment and service exposure.",
    tags: ["Jenkins", "Docker", "Kubernetes", "GitHub"],
    href: "https://github.com/Manoj261/End-to-End-DevOps-Pipeline-with-Kubernetes.git",
    linkText: "View GitHub",
  },
  {
    number: "02",
    type: "AWS • MAY 2026",
    title: "Multi-Tier Web Application on AWS",
    description:
      "Deployed a PHP web application using EC2 and RDS (MySQL), configured an Application Load Balancer and Auto Scaling Group, and worked with VPC networking, CloudFront, and Route 53.",
    tags: ["AWS EC2", "RDS", "ALB", "Auto Scaling"],
    href: "https://github.com/manoj261",
    linkText: "View GitHub",
  },
  {
    number: "03",
    type: "PUBLICATION • JUNE 2025",
    title: "Access Control Mechanisms for Securing Data During Transmissions",
    description:
      "Developed an RBAC-based security framework with OTP authentication and layered encryption, and evaluated the approach through performance benchmarking and security testing.",
    tags: ["Security", "RBAC", "Encryption"],
    href: null,
    linkText: "i-manager's Journal on Software Engineering",
  },
];

const skillGroups = [
  { title: "Cloud Platforms", icon: Cloud, items: "AWS EC2, RDS, S3, IAM, VPC, Route 53, CloudFront, SQS, Lambda" },
  { title: "DevOps & Operating Systems", icon: Layers3, items: "Linux, Shell Scripting, Git, Terraform, Ansible, CI/CD, Jenkins" },
  { title: "Containers & Orchestration", icon: Code2, items: "Docker, Kubernetes" },
  { title: "Programming & Databases", icon: Code2, items: "Python, SQL, MySQL" },
  { title: "Web Technologies", icon: Code2, items: "HTML, CSS, JavaScript, React.js" },
];

function Reveal({ children, className = "", delay = 0, as: Tag = "div", ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reveal when the element enters the viewport, whether scrolling down or up.
        // Keep revealed content visible after it leaves the viewport to avoid blank sections.
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -2% 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}

function Header() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > Math.max(100, window.innerHeight * 0.45));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Comvex", "#comvex"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <header className={`site-header ${visible ? "header-visible" : ""}`}>
      <p className="role">Aspiring DevOps Engineer</p>
      <a className="brand" href="#home" onClick={closeMenu}>Manoj Sriram</a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={closeMenu}>{label}</a>
        ))}
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </Reveal>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section" id="home">
          <Reveal className="profile-column">
            <div className="profile-placeholder">
              <img
                className="profile-photo"
                src="/assets/profile-photo.jpg"
                alt="Manoj Sriram"
              />
            </div>
            <p className="profile-caption">AWS · DEVOPS · CLOUD</p>
          </Reveal>
          <Reveal className="hero-copy" id="about" delay={130}>
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Manoj Sriram<span className="period">.</span></h1>
            <p className="hero-subtitle">Aspiring AWS &amp; DevOps Engineer</p>
            <p className="intro-text">
              I’m interested in building reliable cloud infrastructure, automating delivery
              pipelines, and deploying scalable applications. My hands-on projects explore AWS,
              Linux, Docker, Kubernetes, and infrastructure automation.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore Projects <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#contact">Let's connect <ArrowUpRight size={16} /></a>
            </div>
          </Reveal>
          <a className="scroll-cue" href="#education"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={18} /></a>
        </section>

        <section className="section content-section" id="skills">
          <SectionHeading eyebrow="TOOLS & TECHNOLOGIES" title="Skills" />
          <div className="skills-grid">
            {skillGroups.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Reveal as="article" className="skill-card" key={skill.title} delay={(index % 3) * 100}>
                  <Icon className="skill-icon" size={25} strokeWidth={1.7} />
                  <h3>{skill.title}</h3>
                  <p>{skill.items}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="section content-section" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects" />
          <div className="project-list">
            {projects.map((project, index) => (
              <Reveal as="article" className="project-card" key={project.number} delay={index * 130}>
                <span className="project-number">{project.number}</span>
                <div className="project-main">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="tag-list">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  {project.href
                    ? <a className="text-link" href={project.href} target="_blank" rel="noreferrer">{project.linkText} <ArrowUpRight size={16} /></a>
                    : <span className="publication-label">{project.linkText}</span>}
                </div>
                <div className="project-arrow"><ArrowUpRight size={25} /></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="comvex-section" id="comvex">
          <Reveal className="comvex-mark-wrap">
            <p className="eyebrow">FEATURED APPLICATION</p>
            <img className="comvex-logo" src="/assets/comvex-logo.png" alt="Comvex logo" />
            <p className="comvex-side-note">ANDROID APPLICATION</p>
          </Reveal>
          <Reveal className="comvex-copy" delay={140}>
            <p className="project-type">A SEPARATE SPOTLIGHT</p>
            <h2>Comvex<span className="period">.</span></h2>
            <p className="comvex-lead">An application worth exploring.</p>
            <p>
              Explore the published Comvex app on Google Play. Add a short, accurate summary of
              your contribution, the features you worked on, and the technologies used.
            </p>
            <a className="button button-light" href="https://play.google.com/store/apps/details?id=in.nivratech.comvex.app" target="_blank" rel="noreferrer">
              Explore on Google Play <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </section>

        <section className="section content-section" id="education">
          <SectionHeading eyebrow="MY BACKGROUND" title="Education" />
          <div className="timeline">
            {education.map((item, index) => (
              <Reveal as="article" className="timeline-item" key={item.date} delay={index * 100}>
                <span className="timeline-dot" />
                <div className="timeline-card">
                  <p className="date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                  <p className="result">{item.result}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section content-section contact-section" id="contact">
          <SectionHeading eyebrow="LET'S CONNECT" title="Contact Info" />
          <Reveal className="contact-buttons">
            <a className="contact-button" href="mailto:srirammanoj2610@gmail.com" aria-label="Gmail: email Manoj">
              <img className="contact-image gmail-image" src="/assets/contact-icons/gmail.png" alt="Gmail logo" />
              <span className="contact-tooltip"><strong>Gmail</strong><small>srirammanoj2610@gmail.com</small></span>
            </a>
            <a className="contact-button" href="tel:+918106866209" aria-label="Phone: call Manoj">
              <img className="contact-image" src="/assets/contact-icons/phone.png" alt="Phone icon" />
              <span className="contact-tooltip"><strong>Phone</strong><small>+91 81068 66209</small></span>
            </a>
            <div className="contact-button contact-location" tabIndex="0" aria-label="Location: Chilakaluripet, Andhra Pradesh, India">
              <img className="contact-image" src="/assets/contact-icons/location.png" alt="Location icon" />
              <span className="contact-tooltip"><strong>Location</strong><small>Bengaluru, Karnataka, India</small></span>
            </div>
            <a className="contact-button" href="https://linkedin.com/in/manoj-sriram" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <img className="contact-image" src="/assets/contact-icons/linkedin.png" alt="LinkedIn logo" />
              <span className="contact-tooltip"><strong>LinkedIn</strong><small>linkedin.com/in/manoj-sriram</small></span>
            </a>
            <a className="contact-button" href="https://github.com/manoj261" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <img className="contact-image" src="/assets/contact-icons/github.png" alt="GitHub logo" />
              <span className="contact-tooltip"><strong>GitHub</strong><small>github.com/manoj261</small></span>
            </a>
            <a className="contact-button" href="/assets/Manoj-Sriram-Resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume: view or download">
              <img className="contact-image" src="/assets/contact-icons/resume.png" alt="Resume icon" />
              <span className="contact-tooltip"><strong>Resume</strong><small>View / download PDF</small></span>
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Manoj Sriram · Aspiring DevOps Engineer</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
