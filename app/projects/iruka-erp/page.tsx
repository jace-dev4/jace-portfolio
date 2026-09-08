import Image from "next/image";
import Link from "next/link";

export default function IrukaERPPage() {
return ( <main className="case-study-page">
{/* NAV */} <nav className="case-nav"> <div className="case-container case-nav-inner"> <Link href="/" className="case-logo">
JACE<span>.</span> </Link>

```
      <Link href="/#work" className="case-back">
        ← Back to work
      </Link>
    </div>
  </nav>

  {/* HERO */}
  <section className="case-hero">
    <div className="case-container">
      <div className="case-eyebrow">
        01 — ERP SYSTEM
      </div>

      <div className="case-hero-grid">
        <div>
          <h1>
            IRUKA Industries
            <br />
            <span>ERP System.</span>
          </h1>
        </div>

        <div className="case-hero-copy">
          <p>
            A centralized business management platform designed to
            connect operations, inventory, production, staff, sales,
            and business intelligence in one modern system.
          </p>

          <div className="case-meta">
            <div>
              <small>ROLE</small>
              <strong>Full-Stack Developer</strong>
            </div>

            <div>
              <small>TYPE</small>
              <strong>Enterprise / ERP</strong>
            </div>

            <div>
              <small>STACK</small>
              <strong>Next.js · Supabase</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* REAL SCREENSHOTS */}
  <section className="case-preview-section iruka-real-screens">
    <div className="case-container">
      <div className="real-screen-main">
        <div className="real-screen-label">
          <span>01</span>
          Dashboard
        </div>

        <div className="real-screen-frame">
          <Image
            src="/projects/iruka-erp/dashboard.png"
            alt="IRUKA Industries ERP dashboard"
            width={1600}
            height={1000}
            priority
          />
        </div>
      </div>

      <div className="real-screen-grid">
        <div className="real-screen-item">
          <div className="real-screen-label">
            <span>02</span>
            Login
          </div>

          <div className="real-screen-frame">
            <Image
              src="/projects/iruka-erp/login.png"
              alt="IRUKA Industries ERP login screen"
              width={1600}
              height={1000}
            />
          </div>
        </div>

        <div className="real-screen-item">
          <div className="real-screen-label">
            <span>03</span>
            Staff Management
          </div>

          <div className="real-screen-frame">
            <Image
              src="/projects/iruka-erp/staff.png"
              alt="IRUKA Industries ERP staff management screen"
              width={1600}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* OVERVIEW */}
  <section className="case-section">
    <div className="case-container case-two-column">
      <div className="case-label">
        01 — Overview
      </div>

      <div className="case-copy">
        <h2>
          One system for the
          <br />
          entire operation.
        </h2>

        <p>
          IRUKA Industries needed a way to bring different parts of
          its business into one connected digital environment.
        </p>

        <p>
          Instead of relying on disconnected workflows and manual
          processes, the ERP system provides a centralized platform
          where business activity can be monitored and managed from
          one place.
        </p>

        <div className="case-highlight">
          <strong>Centralized operations</strong>

          <span>
            Connecting business processes, people, data, and
            operational workflows through one platform.
          </span>
        </div>
      </div>
    </div>
  </section>

  {/* CAPABILITIES */}
  <section className="case-section case-dark-section">
    <div className="case-container">
      <div className="case-section-heading">
        <div className="case-label">
          02 — Capabilities
        </div>

        <h2>
          Built around
          <br />
          real operations.
        </h2>
      </div>

      <div className="case-capabilities">
        <div>
          <span>01</span>
          <h3>Dashboard</h3>
          <p>
            A centralized overview of important business activity,
            metrics, and operational information.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Staff Management</h3>
          <p>
            Digital management of employees, roles, responsibilities,
            and staff-related information.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Inventory</h3>
          <p>
            Track materials, products, stock movement, usage, and
            operational inventory data.
          </p>
        </div>

        <div>
          <span>04</span>
          <h3>Production</h3>
          <p>
            Support production workflows and provide visibility into
            manufacturing activity.
          </p>
        </div>

        <div>
          <span>05</span>
          <h3>Sales</h3>
          <p>
            Organize sales information and connect commercial
            activity with the wider business system.
          </p>
        </div>

        <div>
          <span>06</span>
          <h3>Analytics</h3>
          <p>
            Transform operational data into useful information for
            monitoring and decision-making.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* WORKFLOW */}
  <section className="case-section">
    <div className="case-container case-two-column">
      <div className="case-label">
        03 — Workflow
      </div>

      <div className="case-copy">
        <h2>
          From business activity
          <br />
          to useful data.
        </h2>

        <p>
          The system was designed around the way information moves
          through a real business rather than treating each feature
          as an isolated application.
        </p>

        <div className="case-flow">
          <div>
            <strong>01</strong>
            <span>Staff input</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Operational activity</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Central database</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Dashboard insights</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* DESIGN */}
  <section className="case-section case-dark-section">
    <div className="case-container case-two-column">
      <div className="case-label">
        04 — Design approach
      </div>

      <div className="case-copy">
        <h2>
          Complexity without
          <br />
          unnecessary friction.
        </h2>

        <p>
          ERP systems can become overwhelming when too much
          information is presented at once.
        </p>

        <p>
          The interface therefore focuses on clear hierarchy,
          structured navigation, readable information, and
          role-oriented workflows.
        </p>

        <div className="case-principles">
          <div>
            <strong>Clarity</strong>
            <span>Important information stays easy to find.</span>
          </div>

          <div>
            <strong>Structure</strong>
            <span>Features follow understandable business workflows.</span>
          </div>

          <div>
            <strong>Scalability</strong>
            <span>The platform can grow as operational needs expand.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* TECHNOLOGY */}
  <section className="case-section">
    <div className="case-container">
      <div className="case-section-heading">
        <div className="case-label">
          05 — Technology
        </div>

        <h2>
          Modern tools.
          <br />
          Practical architecture.
        </h2>
      </div>

      <div className="case-tech-grid">
        <div>
          <strong>Next.js</strong>
          <span>Application framework</span>
        </div>

        <div>
          <strong>React</strong>
          <span>Interactive interfaces</span>
        </div>

        <div>
          <strong>Supabase</strong>
          <span>Database &amp; backend services</span>
        </div>

        <div>
          <strong>TypeScript</strong>
          <span>Type-safe development</span>
        </div>

        <div>
          <strong>Tailwind CSS</strong>
          <span>Responsive interface styling</span>
        </div>

        <div>
          <strong>SQL</strong>
          <span>Structured business data</span>
        </div>
      </div>
    </div>
  </section>

  {/* RESULT */}
  <section className="case-result">
    <div className="case-container">
      <div className="case-label">
        06 — Result
      </div>

      <h2>
        A connected digital
        <br />
        foundation for the business.
      </h2>

      <p>
        The ERP platform brings core business workflows into one
        structured environment, making operational information
        easier to manage, monitor, and use.
      </p>

      <div className="result-stats">
        <div>
          <strong>01</strong>
          <span>Centralized system</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Connected workflows</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Data-driven operations</span>
        </div>
      </div>
    </div>
  </section>

  {/* NEXT PROJECT */}
  <section className="case-next">
    <div className="case-container">
      <span className="case-label">
        Next project
      </span>

      <Link href="/projects/iruka-bread">
        <h2>
          IRUKA Bread
          <br />
          <span>Mobile App ↗</span>
        </h2>
      </Link>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="case-footer">
    <div className="case-container">
      <span>© 2026 Jace.</span>

      <Link href="/">
        Back to portfolio
      </Link>
    </div>
  </footer>
</main>

);
}
