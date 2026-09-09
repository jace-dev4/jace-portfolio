import Link from "next/link";

const screenshots = [
  {
    src: "/projects/iruka-bread/screenshot%201.PNG",
    title: "Home",
    description: "The customer home screen for discovering fresh bakery products.",
  },
  {
    src: "/projects/iruka-bread/screenshot%202.PNG",
    title: "Products",
    description: "A clean product catalogue for browsing available bakery items.",
  },
  {
    src: "/projects/iruka-bread/screenshot%203.PNG",
    title: "Product Details",
    description: "Customers can view product information and choose quantities.",
  },
  {
    src: "/projects/iruka-bread/screenshot%204.PNG",
    title: "Search",
    description: "Quick product discovery through the mobile search experience.",
  },
  {
    src: "/projects/iruka-bread/screenshot%205.PNG",
    title: "Cart",
    description: "Customers can review products, quantities, and order totals.",
  },
  {
    src: "/projects/iruka-bread/screenshot%206.PNG",
    title: "Checkout",
    description: "A straightforward checkout flow for completing an order.",
  },
  {
    src: "/projects/iruka-bread/screenshot%207.PNG",
    title: "Payment",
    description: "Payment and order confirmation experience.",
  },
  {
    src: "/projects/iruka-bread/screenshot%208.PNG",
    title: "Orders",
    description: "Customers can review their previous and active orders.",
  },
  {
    src: "/projects/iruka-bread/screenshot%209.PNG",
    title: "Profile",
    description: "Customer profile and account management.",
  },
];

export default function IrukaBreadPage() {
  return (
    <main className="case-study-page bread-page">
      <nav className="case-nav">
        <div className="case-container case-nav-inner">
          <Link href="/" className="case-logo">
            JACE<span>.</span>
          </Link>

          <Link href="/#work" className="case-back">
            ← Back to portfolio
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="case-hero">
        <div className="case-container">
          <div className="case-hero-content">
            <span className="case-label">Mobile Application</span>

            <h1>
              IRUKA Bread
              <br />
              <span>Mobile App.</span>
            </h1>

            <p>
              A modern mobile ordering experience built for IRUKA Industries,
              connecting customers with fresh bakery products through a simple
              digital ordering journey.
            </p>

            <div className="case-meta">
              <div>
                <span>Role</span>
                <strong>Full-Stack Developer</strong>
              </div>

              <div>
                <span>Platform</span>
                <strong>React Native · Expo</strong>
              </div>

              <div>
                <span>Backend</span>
                <strong>Supabase</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL APP SCREENSHOTS */}
      <section className="case-section">
        <div className="case-container">
          <div className="case-section-heading">
            <div>
              <span className="case-label">The App</span>
              <h2>Built for a real customer journey.</h2>
            </div>

            <p>
              The IRUKA Bread app takes customers from discovering products to
              placing and managing their orders through a focused mobile
              experience.
            </p>
          </div>

          <div className="iruka-screenshot-grid">
            {screenshots.map((screen, index) => (
              <article
                className={`iruka-screenshot-card ${
                  index === 0 ? "featured" : ""
                }`}
                key={screen.src}
              >
                <div className="iruka-screenshot-frame">
                  <img
                    src={screen.src}
                    alt={`IRUKA Bread ${screen.title} screen`}
                  />
                </div>

                <div className="iruka-screenshot-info">
                  <span>0{index + 1}</span>

                  <div>
                    <h3>{screen.title}</h3>
                    <p>{screen.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="case-section case-dark-section">
        <div className="case-container case-two-column">
          <div>
            <span className="case-label">Overview</span>
            <h2>
              Ordering bread should feel as simple as buying bread.
            </h2>
          </div>

          <div className="case-copy">
            <p>
              The IRUKA Bread mobile application was designed around one clear
              goal: give customers a fast, straightforward way to discover
              products and place an order from their phone.
            </p>

            <p>
              Instead of forcing customers through complicated forms or
              disconnected ordering steps, the experience keeps product
              selection, quantities, cart management, and fulfillment choices
              within one connected flow.
            </p>

            <div className="case-highlight">
              <span>CORE IDEA</span>
              <strong>
                A customer-first ordering experience connected directly to
                the bakery&apos;s wider business operation.
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="case-section">
        <div className="case-container">
          <div className="case-section-heading">
            <div>
              <span className="case-label">Experience</span>
              <h2>Designed around the customer journey.</h2>
            </div>

            <p>
              Every major interaction is focused on reducing friction between
              discovering a product and successfully placing an order.
            </p>
          </div>

          <div className="case-capabilities">
            <article>
              <span>01</span>
              <h3>Product Discovery</h3>
              <p>
                Customers can browse available bread and bakery products from
                a clean, mobile-first catalogue.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Multiple Products</h3>
              <p>
                Customers can select different products and control quantities
                before completing their order.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Cart Management</h3>
              <p>
                A centralized cart keeps selected products, quantities, and
                totals easy to review.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Delivery Orders</h3>
              <p>
                Customers can choose delivery when they want their order
                brought directly to them.
              </p>
            </article>

            <article>
              <span>05</span>
              <h3>Pickup Orders</h3>
              <p>
                Pickup provides a simpler alternative for customers collecting
                their order from the bakery.
              </p>
            </article>

            <article>
              <span>06</span>
              <h3>Order Tracking</h3>
              <p>
                The experience is structured around clear order states so
                customers understand what is happening after checkout.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* USER FLOW */}
      <section className="case-section case-dark-section">
        <div className="case-container">
          <div className="case-section-heading">
            <div>
              <span className="case-label">User Flow</span>
              <h2>From product discovery to fulfillment.</h2>
            </div>

            <p>
              The application connects the customer-facing ordering journey
              into a simple sequence with minimal decision points.
            </p>
          </div>

          <div className="case-flow">
            <div className="case-flow-item">
              <span>01</span>
              <strong>Browse</strong>
              <small>Explore available products</small>
            </div>

            <div className="case-flow-arrow">→</div>

            <div className="case-flow-item">
              <span>02</span>
              <strong>Select</strong>
              <small>Choose products & quantities</small>
            </div>

            <div className="case-flow-arrow">→</div>

            <div className="case-flow-item">
              <span>03</span>
              <strong>Checkout</strong>
              <small>Review the order</small>
            </div>

            <div className="case-flow-arrow">→</div>

            <div className="case-flow-item">
              <span>04</span>
              <strong>Fulfillment</strong>
              <small>Delivery or pickup</small>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section className="case-section">
        <div className="case-container case-two-column">
          <div>
            <span className="case-label">Design Approach</span>
            <h2>Simple interfaces. Connected operations.</h2>
          </div>

          <div className="case-copy">
            <p>
              The application prioritizes clarity over visual noise. Products,
              quantities, cart information, and order actions are presented in
              a way that feels natural on a small screen.
            </p>

            <p>
              The customer experience is also designed as part of a larger
              business system. Orders can become operational data rather than
              remaining isolated inside a standalone mobile storefront.
            </p>

            <div className="case-principles">
              <div>
                <strong>01</strong>
                <span>Mobile-first interaction</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Clear product hierarchy</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Minimal checkout friction</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Connected order data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="case-section case-dark-section">
        <div className="case-container">
          <div className="case-section-heading">
            <div>
              <span className="case-label">Technology</span>
              <h2>The stack behind the experience.</h2>
            </div>

            <p>
              A modern application stack gives the mobile experience a strong
              foundation for reliable product and order data.
            </p>
          </div>

          <div className="case-tech-grid">
            <div>
              <span>01</span>
              <strong>React Native</strong>
              <p>
                Cross-platform mobile development for a consistent customer
                experience.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>Supabase</strong>
              <p>
                Database, authentication, and backend services for connected
                application data.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>TypeScript</strong>
              <p>
                Safer application development with predictable data structures
                and maintainable code.
              </p>
            </div>

            <div>
              <span>04</span>
              <strong>Expo</strong>
              <p>
                A streamlined development environment for building and
                deploying the React Native application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section className="case-result">
        <div className="case-container">
          <span className="case-label">Result</span>

          <h2>
            A simpler way to
            <br />
            <span>order fresh bread.</span>
          </h2>

          <p>
            The IRUKA Bread application turns a traditional bakery ordering
            process into a modern digital customer experience while creating a
            stronger connection between customers and the business.
          </p>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="case-next">
        <div className="case-container">
          <div>
            <span className="case-label">Next project</span>
            <h2>Business Analytics Dashboard</h2>
          </div>

          <Link href="/projects/business-analytics" className="case-next-link">
            View next case study <span>↗</span>
          </Link>
        </div>
      </section>

      <footer className="case-footer">
        <div className="case-container">
          <span>© 2026 Jace. All rights reserved.</span>

          <Link href="/#work">Back to portfolio ↑</Link>
        </div>
      </footer>
    </main>
  );
}