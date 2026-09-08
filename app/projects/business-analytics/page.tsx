import Image from "next/image";
import Link from "next/link";

export default function BusinessAnalyticsPage() {
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
        03 — ANALYTICS
      </div>

      <div className="case-hero-grid">
        <div>
          <h1>
            Business
            <br />
            <span>Analytics Dashboard.</span>
          </h1>
        </div>

        <div className="case-hero-copy">
          <p>
            A data-driven dashboard designed to transform business
            information into clear performance insights across
            sales, finance, products, customers, and revenue.
          </p>

          <div className="case-meta">
            <div>
              <small>ROLE</small>
              <strong>Full-Stack Developer</strong>
            </div>

            <div>
              <small>TYPE</small>
              <strong>Business Intelligence</strong>
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
  <section className="case-preview-section analytics-real-screens">
    <div className="case-container">
      <div className="analytics-screen-main">
        <div className="real-screen-label">
          <span>01</span>
          Analytics Dashboard
        </div>

        <div className="real-screen-frame">
          <Image
            src="/projects/analytics/analytics.png"
            alt="Business analytics dashboard"
            width={1600}
            height={1000}
            priority
          />
        </div>
      </div>

      <div className="analytics-screen-secondary">
        <div className="real-screen-label">
          <span>02</span>
          Finance
        </div>

        <div className="real-screen-frame">
          <Image
            src="/projects/analytics/finance.png"
            alt="Business finance dashboard"
            width={1600}
            height={1000}
          />
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
          Turning business data
          <br />
          into decisions.
        </h2>

        <p>
          Businesses generate large amounts of information through
          sales, operations, customers, products, and financial
          activity.
        </p>

        <p>
          The purpose of this dashboard is to bring that information
          together and present it in a way that makes performance
          easier to understand.
        </p>

        <div className="case-highlight">
          <strong>From data to insight</strong>

          <span>
            Transforming raw business information into structured
            dashboards that help users understand performance and
            identify important trends.
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
          A clearer view
          <br />
          of performance.
        </h2>
      </div>

      <div className="case-capabilities">
        <div>
          <span>01</span>
          <h3>Sales Analytics</h3>
          <p>
            Monitor sales activity and understand performance
            across the business.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Revenue</h3>
          <p>
            Present revenue information in a structured format for
            easier financial visibility.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Finance</h3>
          <p>
            Provide a centralized view of important financial
            information and business activity.
          </p>
        </div>

        <div>
          <span>04</span>
          <h3>Products</h3>
          <p>
            Understand product performance and identify important
            patterns across the catalogue.
          </p>
        </div>

        <div>
          <span>05</span>
          <h3>Customers</h3>
          <p>
            Organize customer-related information to support better
            business understanding.
          </p>
        </div>

        <div>
          <span>06</span>
          <h3>Performance</h3>
          <p>
            Bring important metrics together into a single
            decision-making environment.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* DATA WORKFLOW */}
  <section className="case-section">
    <div className="case-container case-two-column">
      <div className="case-label">
        03 — Data workflow
      </div>

      <div className="case-copy">
        <h2>
          Raw information
          <br />
          becomes useful.
        </h2>

        <p>
          The dashboard is designed around the transformation of
          business activity into information that people can
          actually use.
        </p>

        <div className="case-flow">
          <div>
            <strong>01</strong>
            <span>Business activity</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Structured data</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Analytics</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Business decisions</span>
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
          Numbers should
          <br />
          tell a story.
        </h2>

        <p>
          A dashboard should not simply display numbers. It should
          help users understand what those numbers mean.
        </p>

        <p>
          The interface therefore focuses on visual hierarchy,
          meaningful grouping, readable metrics, and clear
          presentation of financial and operational information.
        </p>

        <div className="case-principles">
          <div>
            <strong>Hierarchy</strong>
            <span>
              The most important metrics receive the strongest
              visual emphasis.
            </span>
          </div>

          <div>
            <strong>Context</strong>
            <span>
              Data is grouped so users can understand relationships
              between metrics.
            </span>
          </div>

          <div>
            <strong>Clarity</strong>
            <span>
              Complex information is presented in a clean,
              understandable interface.
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
          Data-driven software
          <br />
          with a modern stack.
        </h2>
      </div>

      <div className="case-tech-grid">
        <div>
          <strong>Next.js</strong>
          <span>Application framework</span>
        </div>

        <div>
          <strong>React</strong>
          <span>Interactive dashboard UI</span>
        </div>

        <div>
          <strong>Supabase</strong>
          <span>Database &amp; backend services</span>
        </div>

        <div>
          <strong>TypeScript</strong>
          <span>Type-safe application logic</span>
        </div>

        <div>
          <strong>SQL</strong>
          <span>Business data queries</span>
        </div>

        <div>
          <strong>Analytics</strong>
          <span>Performance reporting</span>
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
        Business information
        <br />
        made easier to understand.
      </h2>

      <p>
        The analytics platform creates a centralized environment
        for understanding sales, financial activity, products,
        customers, and overall business performance.
      </p>

      <div className="result-stats">
        <div>
          <strong>01</strong>
          <span>Centralized analytics</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Financial visibility</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Data-driven decisions</span>
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
