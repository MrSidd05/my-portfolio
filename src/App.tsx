import { useEffect, useState } from "react"

const sections = ["home", "work", "ventures", "about", "connect"]
const gmailCompose =
  "https://mail.google.com/mail/?view=cm&fs=1&to=siddharth.ghatuary.id@gmail.com&su=Let%27s%20connect"

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.84a9.5 9.5 0 0 1 2.5.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.5 8.5v9M6.5 5.75v.01M10.5 17.5v-9m0 4c.7-2.7 7-3.2 7 1.5v3.5M4 2.5h16a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20V4A1.5 1.5 0 0 1 4 2.5Z" />
  </svg>
)

function App() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        )
      },
      { threshold: 0.45 },
    )
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <div className="noise" />
      <header className="nav">
        <a className="brand" href="#home" aria-label="Siddharth Ghatuary, home">
          <span>SG</span>
          <i />
        </a>
        <nav aria-label="Main navigation">
          {sections.map((section) => (
            <a
              className={active === section ? "active" : ""}
              href={`#${section}`}
              key={section}
            >
              {section === "home" ? "Home" : section}
            </a>
          ))}
        </nav>
        <a
          className="availability"
          href={gmailCompose}
          target="_blank"
          rel="noreferrer"
        >
          <i /> Available to connect
        </a>
      </header>

      <section id="home" className="panel hero">
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="core">SG</div>
          <span className="satellite s1">PY</span>
          <span className="satellite s2">SQL</span>
          <span className="satellite s3">BI</span>
        </div>
        <div className="eyebrow">
          <span>01</span> Software Engineer · Data Systems · Automation
        </div>
        <h1>
          I engineer clarity
          <br />
          from complex data.
        </h1>
        <p className="hero-copy">
          I’m Siddharth Ghatuary — a Software Engineer I specializing in Python,
          advanced SQL, enterprise reporting, and workflow automation. I turn
          complex healthcare data into dependable systems and clear,
          decision-ready insights.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            Explore my work
          </a>
          <a
            className="button ghost"
            href="/Siddharth-Ghatuary-Resume.pdf"
            target="_blank"
          >
            View Resume
          </a>
        </div>
      </section>

      <section id="work" className="panel section">
        <div className="section-top">
          <div className="eyebrow">
            <span>02</span> Selected impact
          </div>
        </div>
        <div className="work-layout">
          <div className="work-lead">
            <span className="company">ORACLE / HEALTHCARE</span>
            <h2>Software Engineer I</h2>
            <p className="period">October 2023 — Present</p>
            <div className="metric-grid">
              <div>
                <strong>200+</strong>
                <span>Production reports</span>
              </div>
              <div>
                <strong>90%</strong>
                <span>SLA adherence</span>
              </div>
              <div>
                <strong>4×</strong>
                <span>Recognized for impact</span>
              </div>
            </div>
          </div>
          <div className="impact-list">
            <article>
              <span>01</span>
              <div>
                <h3>Automation at scale</h3>
                <p>
                  I automate recurring healthcare-reporting workflows and build
                  reusable internal Python tools. One team-wide automation
                  removed the need to recreate the same backup document for
                  every ticket, saving valuable delivery time, reducing
                  repetitive effort, and making the workflow easier for the
                  entire team.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Decision-ready data</h3>
                <p>
                  I engineer GUI reports and backend data pipelines with Python,
                  SQL, DA2, Power Insight, and CCL, with performance-tuned
                  transformation logic that protects accuracy and scale.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Technical leadership</h3>
                <p>
                  I partner with hospital stakeholders and clinical teams,
                  translate requirements into production systems, and have led
                  5+ demos on Python automation and reporting best practices.
                </p>
              </div>
            </article>
            <article>
              <span>04</span>
              <div>
                <h3>Executive-facing intelligence</h3>
                <p>
                  I build Python and Tableau dashboards that turn raw clinical
                  and operational data into insights used by hospital executives
                  for patient-care management.
                </p>
              </div>
            </article>
            <article>
              <span>05</span>
              <div>
                <h3>Reliable delivery</h3>
                <p>
                  I maintain 90% SLA adherence while closing the highest volume
                  of report requests on the team, earning four recognitions for
                  outstanding performance.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="role-strip">
          <span>PREVIOUS ROLE</span>
          <strong>Python Developer Intern</strong>
          <span>Analytic Edge · 2022</span>
          <p>
            Built a JSON-configured Python tool that generated complete
            microservice structures, cutting setup time by 50% and errors by
            80%. Integrated it into CI/CD workflows for 2+ teams and 3+ live
            projects.
          </p>
        </div>
        <div className="project-lab">
          <div className="project-lab-title">
            <span>PERSONAL PROJECTS</span>
            <h3>Applied projects</h3>
            <p>
              Personal builds extending enterprise reporting into AI-assisted
              analytics, safe data access, and computer vision.
            </p>
          </div>
          <article>
            <span>AI + ANALYTICS</span>
            <h4>AI Report-Insights Assistant</h4>
            <p>
              A Python CLI that applies rolling z-score anomaly detection to
              operational metrics, then uses Claude to produce plain-English
              executive summaries from verified statistics.
            </p>
          </article>
          <article>
            <span>AI + SQL SAFETY</span>
            <h4>Natural-Language-to-SQL Assistant</h4>
            <p>
              Converts questions into SQL against an introspected local schema,
              with strict SELECT-only and blocklisted DDL/DML safety validation
              before execution.
            </p>
          </article>
          <article>
            <span>COMPUTER VISION</span>
            <h4>Intelligent CCTV Surveillance</h4>
            <p>
              A real-time Python system that detects unfamiliar faces, falls,
              and fights, then sends Telegram alerts to improve response time.
            </p>
          </article>
        </div>
      </section>

      <section id="ventures" className="panel section ventures">
        <div className="section-top">
          <div className="eyebrow">
            <span>03</span> Independent work
          </div>
          <p>Experiments and client partnerships built beyond the day job.</p>
        </div>
        <div className="venture-grid">
          <a
            className="venture featured"
            href="https://query-quest-ruddy.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="venture-head">
              <span className="status">
                <i /> In development
              </span>
            </div>
            <div className="quest-visual" aria-hidden="true">
              <div className="code-window">
                <span>QUERY_QUEST / LEVEL_04</span>
                <code>
                  <b>SELECT</b> knowledge
                  <br />
                  <b>FROM</b> world
                  <br />
                  <b>WHERE</b> curiosity = true;
                </code>
                <div className="code-result">+ 250 XP · district unlocked</div>
              </div>
            </div>
            <div className="venture-copy">
              <span>FOUNDER PROJECT / EDTECH</span>
              <h2>QueryQuest</h2>
              <p>
                A self-learning platform taking anyone from SQL fundamentals to
                advanced querying through real query missions, workplace-style
                assignments, and a city-building learning game.
              </p>
              <strong>Visit QueryQuest</strong>
            </div>
          </a>
          <a
            className="venture client"
            href="https://thecurrycaravan.in/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="venture-head">
              <span>CLIENT DELIVERY / 2026</span>
            </div>
            <div className="curry-visual" aria-hidden="true">
              <span>THE</span>
              <strong>CURRY</strong>
              <strong>CARAVAN</strong>
              <i>authentic flavour, delivered</i>
            </div>
            <div className="venture-copy">
              <span>END-TO-END WEB DELIVERY</span>
              <h2>Curry Caravan</h2>
              <p>
                I owned the complete client journey: domain purchase, planning,
                visual direction, responsive development, content presentation,
                production deployment, and the final live launch.
              </p>
              <strong>Visit Curry Caravan</strong>
            </div>
          </a>
        </div>
      </section>

      <section id="about" className="panel section about">
        <div className="section-top">
          <div className="eyebrow">
            <span>04</span> About
          </div>
        </div>
        <div className="about-grid">
          <div>
            <h2>
              Systems thinker.
              <br />
              Curious builder.
              <br />
              Clear communicator.
            </h2>
            <p>
              I work at the intersection of software engineering, analytics, and
              human-centered problem solving. My experience spans production
              healthcare systems, performance-tuned SQL, internal automation,
              stakeholder communication, and independent product delivery. I’m
              also an AI enthusiast and lifelong learner who enjoys exploring
              new ideas, improving how I work, and building something new every
              day.
            </p>
          </div>
          <figure className="profile-photo">
            <img
              src="/siddharth-ghatuary.webp"
              alt="Siddharth Ghatuary"
              width="900"
              height="1600"
            />
            <figcaption>Siddharth Ghatuary</figcaption>
          </figure>
          <div className="ai-manifesto">
            <span>MY AI PRINCIPLE</span>
            <blockquote>
              “Everyone can use AI today. The distinction is knowing how to use
              it with judgment.”
            </blockquote>
            <p>
              I bring hands-on experience using AI to research, prototype,
              automate, validate, and deliver faster without compromising
              quality. I treat AI as an engineering multiplier: strong outputs
              still need context, domain understanding, safety checks, and
              accountable human decisions.
            </p>
          </div>
          <div className="stack-card">
            <span>CORE TOOLKIT</span>
            <div className="tags">
              {[
                "Python",
                "Advanced SQL",
                "PostgreSQL",
                "MySQL",
                "REST APIs",
                "Shell",
                "Git",
                "CI/CD",
                "Tableau",
                "Workflow automation",
                "Generative AI",
                "Agentic AI",
                "LLMs",
                "RAG",
                "Leadership",
                "Stakeholder management",
                "Business management",
                "Team contributor",
                "Philomath",
              ].map((tag) => (
                <i key={tag}>{tag}</i>
              ))}
            </div>
          </div>
          <div className="achievement">
            <span>LEADERSHIP LOG</span>
            <ul>
              <li>
                <b>National Hackathon Judge</b>
                <small>Evaluation & mentorship · 2025</small>
              </li>
              <li>
                <b>GitHub Workshop Lead</b>
                <small>50+ junior developers</small>
              </li>
              <li>
                <b>Science Club Lead</b>
                <small>Peer learning & community</small>
              </li>
              <li>
                <b>Silver Medalist</b>
                <small>Inter-school badminton</small>
              </li>
            </ul>
          </div>
          <div className="education">
            <span>EDUCATION</span>
            <strong>B.E. Computer Science</strong>
            <p>AMC Engineering College · VTU</p>
            <b>8.79 / 10 CGPA</b>
          </div>
        </div>
      </section>

      <section id="connect" className="panel connect">
        <div className="connect-orb" aria-hidden="true" />
        <div className="eyebrow">
          <span>05</span> Contact
        </div>
        <h2>Let’s work together.</h2>
        <p>
          I’m open to software engineering, data, automation, and AI-enabled
          product opportunities where reliable execution matters. If you are
          building something ambitious, I would be glad to hear about it.
        </p>
        <a
          className="email-link"
          href={gmailCompose}
          target="_blank"
          rel="noreferrer"
        >
          siddharth.ghatuary.id@gmail.com
        </a>
        <p className="contact-meta">
          Bengaluru, India <span>·</span> +91 93045 58728
        </p>
        <div className="social-links" aria-label="Professional profiles">
          <a
            href="https://www.linkedin.com/in/siddharth-ghatuary-a381671b1/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href="https://github.com/MrSidd05"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
        <footer>
          <span>© 2025 Siddharth Ghatuary</span>
          <span>Software Engineer · Bengaluru</span>
          <a href="#home">Back to orbit ↑</a>
        </footer>
      </section>
    </main>
  )
}

export default App
