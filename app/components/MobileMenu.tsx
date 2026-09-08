"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        className="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-nav ${open ? "open" : ""}`}>
        <a href="/#work" onClick={closeMenu}>
          Work
        </a>

<a href="/#about" onClick={closeMenu}>About</a>
<a href="/#expertise" onClick={closeMenu}>Expertise</a>
<a href="/#resume" onClick={closeMenu}>Resume</a>
<a href="/#contact" onClick={closeMenu}>Contact</a>

        <div className="mobile-social-links">
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
        </div>

        <div className="mobile-contact-actions">
          <a href="tel:+2349157851864" className="mobile-call">
            Call me <span>↗</span>
          </a>

          <a
            href="mailto:jaceonline4@gmail.com"
            className="mobile-email"
          >
            Email me
          </a>
        </div>

        <a
          href="/#contact"
          className="mobile-nav-cta"
          onClick={closeMenu}
        >
          Let&apos;s talk <span>↗</span>
        </a>
      </div>
    </>
  );
}