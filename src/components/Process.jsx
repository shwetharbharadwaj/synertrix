import React from "react"

function Process() {
  const steps = [
    [
      "Discover & Design",
      "Identify high-impact opportunities and align technology with business goals.",
    ],
    [
      "Prototype & Validate",
      "Rapid pilots proving measurable ROI before enterprise scale.",
    ],
    [
      "Scale & Integrate",
      "Enterprise rollout with governance, integration and tracking.",
    ],
    [
      "Optimize & Evolve",
      "Continuous learning, retraining and innovation roadmaps.",
    ],
  ];

  return (
    <section className="process-section process-roadmap" id="process">
      <div className="container">
        <div className="section-top process-roadmap-heading reveal">
          <span className="section-label">OUR APPROACH</span>
          <h2>We don't just build AI. <em>We embed intelligence.</em></h2>
          <p>From first opportunity to continuous optimization, we build for measurable impact.</p>
        </div>

        <div className="process-roadmap-track">
          <div className="process-roadmap-line" aria-hidden="true"></div>

          {steps.map(([title, description], index) => (
            <article
              className={`process-roadmap-step process-roadmap-step-${index + 1} reveal delay-${Math.min(index + 1, 3)}`}
              key={title}
            >
              <div className="process-roadmap-node" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="process-roadmap-card">
                <div className="process-roadmap-phase">PHASE {String(index + 1).padStart(2, "0")}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="process-roadmap-arrow" aria-hidden="true">↗</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
