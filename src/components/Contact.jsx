import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { COMPANY } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const buildText = () =>
    `Hello G&S Resources,\n\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\n\nRequirement:\n${form.message}`;

  const sendWhatsApp = (e) => {
    e.preventDefault();
    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(buildText())}`,
      "_blank",
      "noopener"
    );
  };

  const sendEmail = () => {
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      "Product Enquiry - " + (form.company || form.name || "Website")
    )}&body=${encodeURIComponent(buildText())}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div className="contact__info">
          <span className="eyebrow eyebrow--dark">Contact Us</span>
          <h2>Feel free to contact us</h2>
          <p>
            Tell us what you need &mdash; item, size, quantity &mdash; and we will get
            back to you with the best quote.
          </p>

          <ul className="contact__list">
            <li>
              <span><Phone size={20} /></span>
              <div>
                <small>Phone</small>
                <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
              </div>
            </li>
            <li>
              <span><Mail size={20} /></span>
              <div>
                <small>Email</small>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
            </li>
            <li>
              <span><MapPin size={20} /></span>
              <div>
                <small>Address</small>
                <b>{COMPANY.address}</b>
              </div>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={sendWhatsApp}>
          <h3>Send an Enquiry</h3>
          <div className="form__row">
            <label>
              Your Name
              <input required value={form.name} onChange={set("name")} placeholder="Full name" />
            </label>
            <label>
              Company
              <input value={form.company} onChange={set("company")} placeholder="Company name" />
            </label>
          </div>
          <label>
            Phone Number
            <input
              required
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder="10-digit mobile number"
            />
          </label>
          <label>
            Your Requirement
            <textarea
              required
              rows="4"
              value={form.message}
              onChange={set("message")}
              placeholder="e.g. 20 pcs 32A contactor, 10 m 2.5 sq mm wire..."
            />
          </label>
          <div className="form__actions">
            <button type="submit" className="btn btn--accent">
              <Send size={17} /> Send on WhatsApp
            </button>
            <button type="button" className="btn btn--outline" onClick={sendEmail}>
              <Mail size={17} /> Send by Email
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
