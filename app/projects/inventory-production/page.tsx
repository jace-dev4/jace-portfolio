import Image from "next/image";
import Link from "next/link";

export default function InventoryProductionPage() {
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
        04 — OPERATIONS
      </div>

      <div className="case-hero-grid">
        <div>
          <h1>
            Inventory &
            <br />
            <span>Production System.</span>
          </h1>
        </div>

        <div className="case-hero-copy">
          <p>
            A business operations platform designed to help teams
            monitor inventory, manage production activity, track
            materials, and maintain better visibility across the
            production workflow.
          </p>

          <div className="case-meta">
            <div>
              <small>ROLE</small>
              <strong>Full-Stack Developer</strong>
            </div>

            <div>
              <small>TYPE</small>
              <strong>Operations System</strong>
            </div>

            <div>
              <small>STACK</small>
              <strong>React · Supabase</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* REAL SCREENSHOTS */}
  <section className="case-preview-section operations-real-screens">
    <div className="case-container">
      <div className="operations-screen-grid">
        <div className="operations-screen-item">
          <div className="real-screen-label">
            <span>01</span>
            Inventory Management
          </div>

          <div className="real-screen-frame">
            <Image
              src="/projects/inventory/inventory.png"
              alt="Inventory management system"
              width={1600}
              height={1000}
              priority
            />
          </div>
        </div>

        <div className="operations-screen-item">
          <div className="real-screen-label">
            <span>02</span>
            Production Management
          </div>

          <div className="real-screen-frame">
            <Image
              src="/projects/inventory/production.png"
              alt="Production management system"
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
          Making operations
          <br />
          easier to control.
        </h2>

        <p>
          Inventory and production processes can quickly become
          difficult to manage when information is scattered across
          spreadsheets, paper records, and disconnected workflows.
        </p>

        <p>
          This system brings inventory and production information
          into a structured digital environment where operational
          activity can be monitored and managed more efficiently.
        </p>

        <div className="case-highlight">
          <strong>Operational visibility</strong>

          <span>
            Giving teams a clearer view of materials, stock,
            production activity, usage, and operational movement.
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
          Built for the
          <br />
          production floor.
        </h2>
      </div>

      <div className="case-capabilities">
        <div>
          <span>01</span>
          <h3>Inventory Tracking</h3>
          <p>
            Monitor available stock and maintain structured records
            of inventory across the business.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Raw Materials</h3>
          <p>
            Keep track of materials required for production and
            understand their availability.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Production</h3>
          <p>
            Record and manage production activity within a
            centralized operational workflow.
          </p>
        </div>

        <div>
          <span>04</span>
          <h3>Material Usage</h3>
          <p>
            Track how materials move from inventory into production
            and operational usage.
          </p>
        </div>

        <div>
          <span>05</span>
          <h3>Waste Tracking</h3>
          <p>
            Record production waste to improve operational
            visibility and support better decision-making.
          </p>
        </div>

        <div>
          <span>06</span>
          <h3>Operational Data</h3>
          <p>
            Maintain structured records that can support reporting,
            analysis, and wider business management.
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
          Materials in.
          <br />
          Production through.
          <br />
          Data out.
        </h2>

        <p>
          The system follows the movement of materials through the
          operational process, allowing inventory and production
          activity to remain connected.
        </p>

        <div className="case-flow">
          <div>
            <strong>01</strong>
            <span>Raw materials</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Inventory</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Production</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Finished output</span>
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
          Information should
          <br />
          feel manageable.
        </h2>

        <p>
          Operational software often contains large amounts of
          information. The interface therefore prioritizes clear
          hierarchy and straightforward workflows.
        </p>

        <p>
          Instead of overwhelming users with unnecessary
          complexity, the system organizes information around the
          actions teams need to perform every day.
        </p>

        <div className="case-principles">
          <div>
            <strong>Visibility</strong>
            <span>
              Important operational information stays accessible.
            </span>
          </div>

          <div>
            <strong>Efficiency</strong>
            <span>
              Common workflows are structured around practical
              actions.
            </span>
          </div>

          <div>
            <strong>Consistency</strong>
            <span>
              Inventory and production data follow connected
              workflows.
            </span>
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
          A focused stack for
          <br />
          business software.
        </h2>
      </div>

      <div className="case-tech-grid">
        <div>
          <strong>React</strong>
          <span>Application interface</span>
        </div>

        <div>
          <strong>Supabase</strong>
          <span>Database &amp; backend services</span>
        </div>

        <div>
          <strong>JavaScript</strong>
          <span>Application logic</span>
        </div>

        <div>
          <strong>SQL</strong>
          <span>Structured operational data</span>
        </div>

        <div>
          <strong>Responsive UI</strong>
          <span>Accessible across screen sizes</span>
        </div>

        <div>
          <strong>Business Logic</strong>
          <span>Production &amp; inventory workflows</span>
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
        Better visibility across
        <br />
        inventory and production.
      </h2>

      <p>
        The system creates a structured digital workflow for
        managing inventory and production activity, helping teams
        understand what is available, what is being produced, and
        how materials are being used.
      </p>

      <div className="result-stats">
        <div>
          <strong>01</strong>
          <span>Inventory visibility</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Production tracking</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Connected operations</span>
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

      <Link href="/projects/business-analytics">
        <h2>
          Business Analytics
          <br />
          <span>Dashboard ↗</span>
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
