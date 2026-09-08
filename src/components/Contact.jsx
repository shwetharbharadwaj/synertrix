import React, { useState } from "react";
import SectionBadge from "../components/SectionBadge";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-wrap">

        {/* CONTACT CONTENT */}
        <div className="contact-copy reveal">

          <SectionBadge label="START A CONVERSATION" />

          <h2>
            Ready to make your{" "}
            <em>data work harder?</em>
          </h2>

          <p>
            Let's identify where modern data and AI can create
            measurable value for your enterprise.
          </p>

          <a href="mailto:contact@synertrix.com">
            contact@synertrix.com <span>↗</span>
          </a>

        </div>

        {/* CONTACT FORM */}
        <form
          className="contact-form reveal delay-1"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >

          <label>
            Name
            <input
              type="text"
              name="name"
              required
            />
          </label>

          <label>
            Work email
            <input
              type="email"
              name="email"
              required
            />
          </label>

          <label>
            Tell us about your requirement
            <textarea
              name="message"
              rows="4"
              required
            ></textarea>
          </label>

          <button type="submit">
            Start a conversation <span>↗</span>
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;