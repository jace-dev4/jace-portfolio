import Image from "next/image";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
return ( <main>
{/* NAVIGATION */} <nav className="navbar"> <div className="nav-inner"> <a href="#" className="logo" aria-label="Jace home">
JACE<span>.</span> </a>

      <div className="nav-links">
        <a href="#work">Work</a>
<a href="#about">About</a>
<a href="#expertise">Expertise</a>
<a href="#resume">Resume</a>
<a href="#contact">Contact</a>

        <span className="nav-divider" aria-hidden="true" />

        <a
          href="https://github.com/jace-dev4"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-social"
          aria-label="Jace on GitHub"
        >
          GitHub
        </a>

        <a
          href="https://x.com/dev_jace4"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-social nav-x"
          aria-label="Jace on X"
        >
          X
        </a>
      </div>

      <a href="#contact" className="nav-cta">
        Let&apos;s talk <span>↗</span>
      </a>

      <MobileMenu />
    </div>
  </nav>

  {/* HERO */}
  <section className="hero">
    <div className="container hero-grid">
      <div className="hero-content">
        <div className="eyebrow">
          <span className="status-dot" />
          Full-Stack Developer · ERP Specialist
        </div>

        <h1>
          I build modern
          <br />
          <span>digital systems.</span>
        </h1>

        <p className="hero-description">
          I build modern web, mobile, and business management systems
          that turn complex workflows into practical digital experiences.
        </p>

        <div className="hero-actions">
          <a href="#work" className="primary-button">
            Explore my work <span>↗</span>
          </a>

          <a href="#contact" className="secondary-button">
            Let&apos;s connect
          </a>
        </div>

        <div className="hero-meta">
          <div>
            <strong>01</strong>
            <span>Full-Stack</span>
          </div>

          <div>
            <strong>02</strong>
            <span>ERP Systems</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Mobile Apps</span>
          </div>
        </div>
      </div>

      {/* HERO VISUAL */}
      <div className="hero-visual" aria-hidden="true">
        <div className="visual-glow" />

        <div className="profile-card">
          <div className="card-top">
            <span>JACE / 2026</span>
            <span>✦</span>
          </div>

          <div className="monogram">J</div>

          <div className="card-bottom">
            <div>
              <small>Full-Stack Software Developer</small>
              <strong>ERP Specialist</strong>
            </div>

            <span className="arrow">↗</span>
          </div>
        </div>

        <div className="floating-card floating-one">
          <span>●</span>

          <div>
            <small>Specializing in</small>
            <strong>Business Systems</strong>
          </div>
        </div>

        <div className="floating-card floating-two">
          <strong>4+</strong>
          <small>Major systems</small>
        </div>
      </div>
    </div>
  </section>

  {/* WORK */}
  <section id="work" className="section">
    <div className="container">
      <div className="section-heading">
        <div>
          <span className="section-label">01 — Selected work</span>
          <h2>Systems I&apos;ve built.</h2>
        </div>

        <p>
          Real-world software solutions designed to solve business
          problems, simplify operations, and turn complex workflows into
          intuitive digital experiences.
        </p>
      </div>

      <div className="work-grid">
        {/* PROJECT 1 — IRUKA ERP */}
        <a
          href="/projects/iruka-erp"
          className="project-card large"
          aria-label="View IRUKA Industries ERP System case study"
        >
          <div className="project-image project-real-image">
            <span className="project-number">01 / ERP SYSTEM</span>

            <div className="real-project-shot">
              <Image
                src="/projects/iruka-erp/dashboard.png"
                alt="IRUKA Industries ERP dashboard"
                width={1600}
                height={1000}
              />
            </div>
          </div>

          <div className="project-info">
            <div>
              <div className="project-tags">
                <span>Next.js</span>
                <span>Supabase</span>
                <span>ERP</span>
              </div>

              <h3>IRUKA Industries ERP System</h3>

              <p>
                Production · Inventory · Sales · Payroll · Finance ·
                Analytics
              </p>

              <span className="project-link">
                View case study <span>↗</span>
              </span>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        </a>

{/* PROJECT 2 — IRUKA BREAD */}
<a
  href="/projects/iruka-bread"
  className="project-card"
  aria-label="View IRUKA Bread Mobile App case study"
>
  <div className="project-image project-real-image">
    <span className="project-number">02 / MOBILE APP</span>

    <div className="real-project-shot">
      <Image
        src="/projects/iruka-bread/screenshot%201.PNG"
        alt="IRUKA Bread mobile app"
        width={1200}
        height={1200}
      />
    </div>
  </div>

  <div className="project-info">
    <div>
      <div className="project-tags">
        <span>React Native</span>
        <span>Expo</span>
        <span>Supabase</span>
      </div>

      <h3>IRUKA Bread Mobile App</h3>

      <p>
        Mobile Development · Ordering · Delivery
      </p>

      <span className="project-link">
        View case study <span>↗</span>
      </span>
    </div>

    <span className="project-arrow">↗</span>
  </div>
</a>

        {/* PROJECT 3 — BUSINESS ANALYTICS */}
        <a
          href="/projects/business-analytics"
          className="project-card"
          aria-label="View Business Analytics Dashboard case study"
        >
          <div className="project-image project-real-image">
            <span className="project-number">
              03 / ANALYTICS
            </span>

            <div className="real-project-shot">
              <Image
                src="/projects/analytics/analytics.png"
                alt="Business analytics dashboard"
                width={1600}
                height={1000}
              />
            </div>
          </div>

          <div className="project-info">
            <div>
              <div className="project-tags">
                <span>Next.js</span>
                <span>Analytics</span>
                <span>Dashboard</span>
              </div>

              <h3>Business Analytics Dashboard</h3>

              <p>
                Analytics · Revenue · Sales · Business Intelligence
              </p>

              <span className="project-link">
                View case study <span>↗</span>
              </span>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        </a>

        {/* PROJECT 4 — INVENTORY */}
        <a
          href="/projects/inventory-production"
          className="project-card inventory-project"
          aria-label="View Inventory and Production Management System case study"
        >
          <div className="project-image project-real-image">
            <span className="project-number">
              04 / OPERATIONS
            </span>

            <div className="real-project-shot">
              <Image
                src="/projects/inventory/inventory.png"
                alt="Inventory management system"
                width={1600}
                height={1000}
              />
            </div>
          </div>

          <div className="project-info">
            <div>
              <div className="project-tags">
                <span>React</span>
                <span>Supabase</span>
                <span>Operations</span>
              </div>

              <h3>
                Inventory &amp; Production Management System
              </h3>

              <p>
                Raw Materials · Production · Stock · Usage · Waste
                Tracking
              </p>

              <span className="project-link">
                View case study <span>↗</span>
              </span>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        </a>
      </div>
    </div>
  </section>

  {/* ABOUT */}
  <section id="about" className="section about-section">
    <div className="container about-grid">
      <span className="section-label">02 — About me</span>

      <div>
        <h2>
          I turn complex business problems into useful digital
          experiences.
        </h2>

        <p>
          I am a Full-Stack Software Developer focused on building
          modern web and mobile applications, ERP solutions,
          dashboards, inventory systems, and database-driven
          business platforms.
        </p>

        <p>
          I enjoy understanding how a business actually operates,
          then transforming those processes into software that is
          practical, reliable, modern, and easy to use.
        </p>

        <div className="about-highlights">
          <div>
            <strong>01</strong>
            <span>Business-first thinking</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Modern development</span>
          </div>

          <div>
            <strong>03</strong>
            <span>End-to-end systems</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* EXPERTISE */}
  <section id="expertise" className="section">
    <div className="container">
      <span className="section-label">03 — Expertise</span>

      <h2>What I build.</h2>

      <div className="skills-grid">
        <div className="skill">
          <span>01</span>

          <h3>Full-Stack Applications</h3>

          <p>
            Modern, responsive web applications with powerful
            backend systems and database integration.
          </p>
        </div>

        <div className="skill">
          <span>02</span>

          <h3>ERP &amp; Business Systems</h3>

          <p>
            Business management platforms that connect
            operations, inventory, sales, finance, staff, and
            analytics.
          </p>
        </div>

        <div className="skill">
          <span>03</span>

          <h3>Dashboards &amp; Analytics</h3>

          <p>
            Data-driven dashboards that turn business information
            into useful insights and actionable decisions.
          </p>
        </div>

        <div className="skill">
          <span>04</span>

          <h3>Mobile Applications</h3>

          <p>
            Mobile experiences that make products, services, and
            business workflows accessible from anywhere.
          </p>
        </div>
      </div>

      <div className="technology-strip">
        <span>TECHNOLOGIES</span>

        <div>
          <strong>Next.js</strong>
          <strong>React</strong>
          <strong>Supabase</strong>
          <strong>Tailwind CSS</strong>
          <strong>React Native</strong>
          <strong>TypeScript</strong>
        </div>
      </div>
    </div>
  </section>

  {/* CONTACT */}
  <section id="contact" className="contact-section">
    <div className="container">
      <div className="contact-heading">
        <span className="section-label">05 — Get in touch</span>

        <h2>
          Have a project
          <br />
          in mind?
        </h2>

        <p>
          Let&apos;s talk about what you&apos;re building, what needs to
          improve, and how I can turn the idea into a reliable digital
          system.
        </p>
      </div>

      <div className="contact-actions">
        <a
          href="mailto:jaceonline4@gmail.com"
          className="contact-action primary"
        >
          <span>
            <small>Email</small>
            jaceonline4@gmail.com
          </span>

          <strong>↗</strong>
        </a>

        <a
          href="https://wa.me/2349157851864"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-action"
        >
          <span>
            <small>WhatsApp</small>
            Chat with me
          </span>

          <strong>↗</strong>
        </a>

        <a
          href="tel:+2349157851864"
          className="contact-action"
        >
          <span>
            <small>Phone</small>
            +234 915 785 1864
          </span>

          <strong>↗</strong>
        </a>

        <a
          href="https://github.com/jace-dev4"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-action"
        >
          <span>
            <small>GitHub</small>
            jace-dev4
          </span>

          <strong>↗</strong>
        </a>

        <a
          href="https://x.com/dev_jace4"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-action"
        >
          <span>
            <small>X</small>
            @dev_jace4
          </span>

          <strong>↗</strong>
        </a>
      </div>
    </div>
  </section>

  <section className="resume-section" id="resume">
  <div className="section-inner">
    <div className="section-heading">
      <span className="section-label">Resume</span>
      <h2>Building software that solves real business problems.</h2>
      <p>
        Full-stack developer focused on ERP systems, business applications,
        dashboards, and database-driven products.
      </p>
    </div>

    <div className="resume-card">
      <div className="resume-content">
        <span className="resume-eyebrow">JACE / PROFILE</span>

        <h3>Full Stack Developer</h3>

        <p>
          I build practical software systems that help businesses manage
          operations, organize information, and reduce manual processes.
          My work spans ERP platforms, dashboards, inventory systems,
          production management, and modern web applications.
        </p>

        <div className="resume-highlights">
          <div>
            <strong>ERP</strong>
            <span>Business Systems</span>
          </div>

          <div>
            <strong>Web</strong>
            <span>Full-Stack Applications</span>
          </div>

          <div>
            <strong>Data</strong>
            <span>Database-Driven Products</span>
          </div>
        </div>

        <div className="resume-actions">
          <a href="#contact" className="btn btn-primary">
            Work with me <span>↗</span>
          </a>

<a
  href="/Jace-Resume.pdf"
  download
  className="secondary-button"
>
  Download CV <span>↓</span>
</a>
        </div>
      </div>

      <div className="resume-skills">
        <span className="resume-eyebrow">CORE STACK</span>

        <div className="resume-skill-list">
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Python</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Tailwind CSS</span>
          <span>Supabase</span>
          <span>PostgreSQL</span>
          <span>Git</span>
          <span>Vercel</span>
        </div>

        <div className="resume-experience">
          <span className="resume-eyebrow">EXPERIENCE</span>
          <p>
            <strong>Independent Software Developer</strong>
            <br />
            Lagos, Nigeria · 2026 – Present
          </p>

          <p>
            <strong>ERP Developer</strong>
            <br />
            Nkiruka/Iruka Industries Ltd. · 2026
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* FOOTER */}
  <footer>
    <div className="container footer-inner">
      <div>
        <span>© 2026 Jace.</span>

        <span>
          Full-Stack Software Developer · ERP Specialist
        </span>
      </div>

      <div className="footer-socials">
        <a
          href="https://github.com/jace-dev4"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://x.com/dev_jace4"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>

        <a
          href="https://wa.me/2349157851864"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

        <a href="tel:+2349157851864">
          Call
        </a>

        <a href="mailto:jaceonline4@gmail.com">
          Email
        </a>
      </div>
    </div>
  </footer>
</main>

);
}
