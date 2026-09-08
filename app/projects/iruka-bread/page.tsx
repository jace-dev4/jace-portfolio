import Link from "next/link";

export default function IrukaBreadPage() {
  return (
    <main className="case-study-page bread-page">
      <nav className="case-nav">
        <div className="case-container case-nav-inner">
          <Link href="/" className="case-logo">
            JACE<span>.</span>
          </Link>

          <Link href="/#work" className="case-back">
            <span>←</span> Back to work
          </Link>
        </div>
      </nav>

      <section className="case-hero">
        <div className="case-container">
          <div className="case-eyebrow">
            <span>02</span>
            MOBILE APP · E-COMMERCE · REACT NATIVE
          </div>

          <h1>
            IRUKA Bread
            <br />
            <span>Mobile App.</span>
          </h1>

          <p className="case-intro">
            A focused mobile ordering experience that makes it easy for
            customers to browse bread products, choose quantities, and place
            delivery or pickup orders without unnecessary friction.
          </p>

          <div className="case-meta">
            <div>
              <span>Project</span>
              <strong>IRUKA Bread Mobile App</strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>Customer Ordering Experience</strong>
            </div>

            <div>
              <span>Stack</span>
              <strong>React Native · Supabase</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="case-preview-section">
        <div className="case-container">
          <div className="bread-preview">
            <div className="bread-phone">
              <div className="bread-phone-top">
                <span>9:41</span>
                <span>● ● ●</span>
              </div>

              <div className="bread-app-header">
                <div>
                  <small>GOOD MORNING</small>
                  <strong>IRUKA Bread</strong>
                </div>

                <div className="bread-avatar">J</div>
              </div>

              <div className="bread-search">
                <span>⌕</span>
                <span>Search bread & products</span>
              </div>

              <div className="bread-category-row">
                <span className="active">All</span>
                <span>Bread</span>
                <span>Pastries</span>
                <span>Snacks</span>
              </div>

              <div className="bread-featured">
                <div>
                  <small>FRESH EVERY DAY</small>
                  <strong>Made fresh.<br />Delivered to you.</strong>
                  <button>Shop now →</button>
                </div>

                <div className="bread-loaf">
                  <div className="bread-loaf-shape" />
                </div>
              </div>

              <div className="bread-section-title">
                <strong>Popular products</strong>
                <span>View all</span>
              </div>

              <div className="bread-products">
                <div className="bread-product">
                  <div className="bread-product-image loaf-one">
                    <span>IRUKA</span>
                  </div>
                  <strong>Family Loaf</strong>
                  <small>Fresh bread</small>
                  <div>
                    <b>₦2,500</b>
                    <button>+</button>
                  </div>
                </div>

                <div className="bread-product">
                  <div className="bread-product-image loaf-two">
                    <span>IRUKA</span>
                  </div>
                  <strong>Milk Bread</strong>
                  <small>Soft & fresh</small>
                  <div>
                    <b>₦2,200</b>
                    <button>+</button>
                  </div>
                </div>
              </div>

              <div className="bread-bottom-nav">
                <span className="active">⌂<small>Home</small></span>
                <span>◫<small>Orders</small></span>
                <span>🛒<small>Cart</small></span>
                <span>◉<small>Profile</small></span>
              </div>
            </div>

            <div className="bread-floating-card bread-order-card">
              <span>ACTIVE ORDER</span>
              <strong>Order #IRK-2048</strong>
              <small>Preparing your order</small>
              <div className="bread-progress">
                <i />
                <i />
                <i className="current" />
                <i />
              </div>
            </div>

            <div className="bread-floating-card bread-cart-card">
              <span>YOUR CART</span>
              <strong>3 products</strong>
              <small>₦7,200 total</small>
            </div>
          </div>
        </div>
      </section>

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
              <strong>Modern UI</strong>
              <p>
                Responsive mobile interfaces focused on speed, hierarchy, and
                usability.
              </p>
            </div>
          </div>
        </div>
      </section>

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
