import React, { useEffect, useState } from "react";

const A = `${import.meta.env.BASE_URL}assets/`;
const nav = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Process", "/process"],
  ["Industries", "/industries"],
  ["Platforms", "/platforms"],
];

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, []);

  return (
    <header className="site-header" id="siteHeader">
      <div className="container nav-wrap">
        {/* Use normal browser navigation for the logo so it ALWAYS returns to home. */}
        <a
          href="/"
          className="wordmark"
          aria-label="Synertrix home"
          onClick={() => setOpen(false)}
        >
          <img
            src={A + "Logos/LOGOS_MAIN-06.png"}
            alt="Synertrix"
            width="150"
            height="58"
          />
        </a>

        <button
          className={"menu-toggle" + (open ? " active" : "")}
          id="menuToggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={"main-nav" + (open ? " open" : "")}
          id="mainNav"
          aria-label="Main navigation"
        >
          {nav.map(([label, path]) => (
            <a
              key={path}
              href={path}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            href="/contact"
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            Talk to us <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
