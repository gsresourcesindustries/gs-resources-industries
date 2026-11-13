import { useMemo, useState } from "react";
import { Search, Wrench, Zap, Cog, Radar, MessageCircle } from "lucide-react";
import { CATEGORIES, COMPANY, productImagePath } from "../data.js";

const ICONS = { Wrench, Zap, Cog, Radar };

export default function Products() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CATEGORIES.filter((c) => active === "all" || c.id === active)
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (i) =>
            !q ||
            i.name.toLowerCase().includes(q) ||
            (i.note || "").toLowerCase().includes(q)
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [active, query]);

  const enquire = (name) =>
    `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
      `Hello G&S Resources, I need a quote for: ${name}`
    )}`;

  return (
    <section id="products" className="section section--tint">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow eyebrow--dark">Our Products</span>
          <h2>Everything your plant and office needs</h2>
          <p>Browse by category or search for an item, then send us an enquiry in one tap.</p>
        </div>

        <div className="toolbar">
          <div className="tabs" role="tablist">
            <button
              className={`tab ${active === "all" ? "is-active" : ""}`}
              onClick={() => setActive("all")}
            >
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                className={`tab ${active === c.id ? "is-active" : ""}`}
                onClick={() => setActive(c.id)}
              >
                {c.title}
              </button>
            ))}
          </div>
          <label className="search">
            <Search size={18} />
            <input
              type="search"
              placeholder="Search product (e.g. relay, sensor)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        {visible.length === 0 && (
          <p className="empty">
            Is naam ka product list mein nahi mila &mdash;{" "}
            <a href={enquire(query)} target="_blank" rel="noreferrer">
              hume WhatsApp par poochiye
            </a>
            , hum arrange kar denge.
          </p>
        )}

        {visible.map((cat) => {
          const Icon = ICONS[cat.icon];
          return (
            <div className="cat" key={cat.id}>
              <div className="cat__head">
                <span className="cat__icon"><Icon size={24} /></span>
                <div>
                  <h3>{cat.title}</h3>
                  <p>{cat.blurb}</p>
                </div>
              </div>
              <div className="grid">
                {cat.items.map((item) => (
                  <article className="card" key={item.name}>
                    <img
                      className="card__img"
                      src={item.image || productImagePath(item.name)}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = cat.image;
                      }}
                    />
                    <h4>{item.name}</h4>
                    {item.note && <span className="card__note">{item.note}</span>}
                    <a
                      className="card__link"
                      href={enquire(item.name)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={15} /> Get Quote
                    </a>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
