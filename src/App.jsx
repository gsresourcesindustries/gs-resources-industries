import { useEffect, useState } from "react";
import {
  Menu, X, Phone, Mail, MapPin, ArrowRight, MessageCircle,
  BadgePercent, Truck, ShieldCheck, Handshake, Package,
} from "lucide-react";
import { COMPANY, CATEGORIES, ALSO_SUPPLY, WHY_US, publicAssetPath } from "./data.js";
import Products from "./components/Products.jsx";
import Contact from "./components/Contact.jsx";

const ICONS = { BadgePercent, Truck, ShieldCheck, Handshake };

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="container nav__inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <img
            src={publicAssetPath("logo/Gemini_Generated_Image_f4as0uf4as0uf4as.png")}
            alt="G&S Resources logo"
            className="brand__logo"
          />
          <span className="brand__text">
            <strong>RESOURCES</strong>
            <small>INDUSTRIES PVT. LTD.</small>
          </span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a className="btn btn--accent btn--sm" href={`tel:${COMPANY.phone}`}>
            <Phone size={16} /> Call Now
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const total = CATEGORIES.reduce((n, c) => n + c.items.length, 0);
  return (
    <section
      id="home"
      className="hero"
      style={{
        "--hero-background": `url("${publicAssetPath("background image/WhatsApp Image 2026-09-20 at 18.22.10.jpeg")}")`,
      }}
    >
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">Rewari, Haryana &bull; Industrial Supply</span>
          <h1>
            One reliable source for your <em>industrial &amp; electrical</em> needs.
          </h1>
          <p>
            Hardware, electrical components, pneumatic &amp; hydraulic products,
            sensors, stationery and housekeeping supplies &mdash; quality products,
            competitive prices, timely delivery.
          </p>
          <div className="hero__cta">
            <a href="#products" className="btn btn--accent">
              Explore Products <ArrowRight size={18} />
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                "Hello G&S Resources, I would like to enquire about your products."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>

        <div className="hero__card">
          <div className="stat">
            <b>{CATEGORIES.length}</b>
            <span>Core Categories</span>
          </div>
          <div className="stat">
            <b>{total}+</b>
            <span>Product Lines</span>
          </div>
          <div className="stat">
            <b>1</b>
            <span>Trusted Partner</span>
          </div>
          <p className="hero__card-note">
            Simplifying industrial &amp; commercial purchasing for production,
            maintenance, office and housekeeping.
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div>
          <span className="eyebrow eyebrow--dark">About Us</span>
          <h2>Welcome to {COMPANY.name}</h2>
          <p>{COMPANY.about}</p>
          <p>{COMPANY.mission}</p>
        </div>
        <div className="also">
          <h3>We also supply</h3>
          {ALSO_SUPPLY.map((a) => (
            <div className="also__item" key={a.title}>
              <span className="also__icon"><Package size={20} /></span>
              <div>
                <strong>{a.title}</strong>
                <p>{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="section section--dark">
      <div className="container">
        <div className="section__head section__head--light">
          <span className="eyebrow">Why G&amp;S Resources</span>
          <h2>Built on quality, transparency and trust</h2>
        </div>
        <div className="why">
          {WHY_US.map((w) => {
            const Icon = ICONS[w.icon];
            return (
              <article className="why__card" key={w.title}>
                <span className="why__icon"><Icon size={26} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="brand brand--footer">
            <img
              src={publicAssetPath("logo/Gemini_Generated_Image_f4as0uf4as0uf4as.png")}
              alt="G&S Resources logo"
              className="brand__logo"
            />
            <span className="brand__text">
              <strong>RESOURCES</strong>
              <small>INDUSTRIES PVT. LTD.</small>
            </span>
          </div>
          <p className="footer__about">{COMPANY.tagline}</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`tel:${COMPANY.phone}`}><Phone size={15} /> {COMPANY.phoneDisplay}</a>
          <a href={`mailto:${COMPANY.email}`}><Mail size={15} /> {COMPANY.email}</a>
          <span><MapPin size={15} /> {COMPANY.address}</span>
        </div>
      </div>
      <div className="footer__bar">
        &copy; {new Date().getFullYear()} G&amp;S RESOURCES INDUSTRIES PVT. LTD. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <nav className="quick-actions" aria-label="Quick contact">
        <a
          className="quick-actions__button quick-actions__button--call"
          aria-label="Call G&S Resources"
          title="Call us"
          href={`tel:${COMPANY.phone}`}
        >
          <Phone size={22} />
        </a>
        <a
          className="quick-actions__button quick-actions__button--email"
          aria-label="Email G&S Resources"
          title="Email us"
          href={`mailto:${COMPANY.email}`}
        >
          <Mail size={22} />
        </a>
        <a
          className="quick-actions__button quick-actions__button--whatsapp"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          href={`https://wa.me/${COMPANY.whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={24} />
        </a>
      </nav>
    </>
  );
}
