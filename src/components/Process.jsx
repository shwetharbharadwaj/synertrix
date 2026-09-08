import React from "react";
import SectionBadge from "../components/SectionBadge";

function Process() {
  const steps = [
    [
      "Discover & Design",
      "Identify high-impact opportunities and align technology with business goals."
    ],
    [
      "Prototype & Validate",
      "Rapid pilots proving measurable ROI before enterprise scale."
    ],
    [
      "Scale & Integrate",
      "Enterprise rollout with governance, integration and tracking."
    ],
    [
      "Optimize & Evolve",
      "Continuous learning, retraining and innovation roadmaps."
    ]
  ];

  return (
    <section className="process-section" id="process">
      <div className="container">

        {/* PROCESS HEADER */}
        <div className="section-page-header reveal">

          <SectionBadge label="PROCESS" />

          <h2>
            We don't just build AI.{" "}
            <em>We embed intelligence.</em>
          </h2>

          <p>
            From first opportunity to continuous optimization,
            we build for measurable impact.
          </p>

        </div>

        {/* PROCESS STEPS */}
        <div className="process-track">

          {steps.map((step, index) => (
            <article
              className="process-card reveal"
              key={index}
            >
              <h3>{step[0]}</h3>

              <p>{step[1]}</p>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;