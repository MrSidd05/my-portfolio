import { useEffect, useState } from "react"

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 6l4 4-4 4" />
  </svg>
)

const External = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M7 5h8v8M15 5l-9 9" />
  </svg>
)

const sections = ["home", "work", "ventures", "about", "connect"]

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
              {section === "home" ? "Index" : section}
            </a>
          ))}
        </nav>
        <a
          className="availability"
          href="mailto:siddharth.ghatuary.id@gmail.com"
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
          from <em>complex data.</em>
        </h1>
        <p className="hero-copy">
          I’m Siddharth Ghatuary — a software engineer building reliable data
          systems, intelligent automation, and experiences that make technical
          ideas feel simple.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            Explore my work <Arrow />
          </a>
          <a
            className="button ghost"
            href="/Siddharth-Ghatuary-Resume.pdf"
            target="_blank"
          >
            View résumé <External />
          </a>
        </div>
        <div className="scroll-cue">
          <span /> Scroll to enter
        </div>
        <div className="coordinates">
          12.9716° N<br />
          77.5946° E
        </div>
      </section>

      <section id="work" className="panel section">
        <div className="section-top">
          <div className="eyebrow">
            <span>02</span> Selected impact
          </div>
          <p>
            Enterprise systems built for accuracy, scale, and real-world
            decisions.
          </p>
        </div>
        <div className="work-layout">
          <div className="work-lead">
            <span className="company">ORACLE / HEALTHCARE</span>
            <h2>Software Engineer I</h2>
            <p className="period">October 2023 — Present</p>
            <div className="metric-grid">
              <div>
                <strong>100+</strong>
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
                  Reusable Python tools that remove recurring manual work and
                  improve delivery consistency across enterprise reporting.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Decision-ready data</h3>
                <p>
                  Production-grade SQL pipelines, GUI reports, and Tableau
                  dashboards for hospital clinical and operational workflows.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Technical leadership</h3>
                <p>
                  Direct stakeholder collaboration and knowledge-sharing
                  sessions on Python automation and reporting best practices.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="role-strip">
          <span>PREVIOUS SIGNAL</span>
          <strong>Python Developer Intern</strong>
          <span>Analytic Edge · 2022</span>
          <p>
            Cut microservice setup time by 50% and errors by 80% with a
            JSON-driven project generator.
          </p>
        </div>
      </section>

      <section id="ventures" className="panel section ventures">
        <div className="section-top">
          <div className="eyebrow">
            <span>03</span> Independent ventures
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
              <External />
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
                Learn SQL from first query to advanced concepts through visual
                lessons, workplace assignments, and a city-building game.
              </p>
              <strong>
                Enter the world <Arrow />
              </strong>
            </div>
          </a>
          <a
            className="venture client"
            href="https://thecurrycaravan.in/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="venture-head">
              <span>CLIENT DELIVERY / 2025</span>
              <External />
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
                A complete digital launch delivered from domain purchase through
                design, development, and production deployment.
              </p>
              <strong>
                Visit live site <Arrow />
              </strong>
            </div>
          </a>
        </div>
      </section>

      <section id="about" className="panel section about">
        <div className="section-top">
          <div className="eyebrow">
            <span>04</span> Beyond the syntax
          </div>
        </div>
        <div className="about-grid">
          <div>
            <h2>
              Systems thinker.
              <br />
              <em>Curious builder.</em>
              <br />
              Clear communicator.
            </h2>
            <p>
              I work at the intersection of software engineering, analytics, and
              human-centered problem solving — translating ambiguity into
              systems people can trust.
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
          <span>05</span> Open channel
        </div>
        <h2>
          Have a hard problem?
          <br />
          <em>Let’s make it simple.</em>
        </h2>
        <p>
          I’m always interested in thoughtful engineering, ambitious products,
          and conversations that lead somewhere unexpected.
        </p>
        <a className="email-link" href="mailto:siddharth.ghatuary.id@gmail.com">
          siddharth.ghatuary.id@gmail.com <Arrow />
        </a>
        <footer>
          <span>© 2025 Siddharth Ghatuary</span>
          <span>Engineered with intent</span>
          <a href="#home">Back to orbit ↑</a>
        </footer>
      </section>
    </main>
  )
}

export default App
