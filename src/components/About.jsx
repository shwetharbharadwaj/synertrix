import SectionBadge from "../components/SectionBadge";

function About() {
  const principles = [
    {
      title: "Empower. Transform. Trust.",
      text:
        "We accelerate digital transformation through ethical, adaptive, and scalable AI systems that prioritize trust, transparency, user empowerment, and data ownership.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 2.8 4.2 12.1l4.3.4  .4 4.3.1 4.3 9.3-9.3-4.7-.1-.1-4.6Z" />
          <path d="m4.5 19.5 4.1-4.1M14.8 9.2l2.8 2.8" />
        </svg>
      ),
    },
    {
      title: "Intelligence. Autonomy. Future.",
      text:
        "Our vision is to be a trusted AI transformation partner, helping organizations evolve into intelligent, autonomous, and future-ready enterprises driven by data and human-centered intelligence.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8" />
        </svg>
      ),
    },
    {
      title: "Innovate. Adapt. Empower.",
      text:
        "We create responsible, transparent, and privacy-first AI systems that adapt to enterprise goals, empower people, and ensure technology advances with purpose.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 3v18M15 3v18M4 7h16M4 17h16M6 7c0 3 2 4 6 5 4 1 6 2 6 5M18 7c0 3-2 4-6 5-4 1-6 2-6 5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="about-modern" id="about">
      <div className="container">

        {/* Same page-header structure used across the site */}
        <div className="section-page-header reveal">
          <SectionBadge label="ABOUT" />

          <h2>
            Intelligence starts with the{" "}
            <em>right foundation.</em>
          </h2>

          <p>
            We are an AI-first analytics and consulting company redefining
            how enterprises think, work, and grow.
          </p>
        </div>

        <div className="about-principles">
          {principles.map((item, index) => (
            <article
              className={`about-principle reveal delay-${index + 1}`}
              key={item.title}
            >
              <div className="principle-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;