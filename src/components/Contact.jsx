import React, { useState } from "react";
import SectionBadge from "../components/SectionBadge";

const GOOGLE_APPS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || "";

function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!GOOGLE_APPS_SCRIPT_URL) {
      setStatus("not-configured");
      return;
    }

    setStatus("sending");

    const formData = new FormData(form);

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(formData),
      });

  

      setStatus("success");
      form.reset();

    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

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


        
        <form
          className="contact-form reveal delay-1"
          onSubmit={handleSubmit}
        >

          
          <label>
            Name

            <input
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </label>


 
          <label>
            Work email

            <input
              type="email"
              name="email"
              autoComplete="email"
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


          
          <input
            type="text"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
              opacity: 0,
              pointerEvents: "none",
            }}
          />


        
          <input
            type="hidden"
            name="source"
            value="Synertrix Website"
          />


          {/* SUBMIT */}
          <button
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending..."
              : "Start a conversation"}

            {status !== "sending" && (
              <span>↗</span>
            )}
          </button>


         
          {status === "success" && (
            <p className="form-success">
              Thanks! Your enquiry has been received.
            </p>
          )}


          
          {status === "error" && (
            <p className="form-error">
              Something went wrong. Please try again.
            </p>
          )}


         
          {status === "not-configured" && (
            <p className="form-error">
              The contact form is not configured yet.
              Please try again later.
            </p>
          )}

        </form>

      </div>
    </section>
  );
}

export default Contact;