import SectionBadge from "../components/SectionBadge";

function Services() {
  const services = [
    {
      title: "Data Engineering",
      description:
        "Design and build scalable, reliable data pipelines and platforms.",
      details:
        "Enterprise data strategy • Integration • Transformation",
    },
    {
      title: "Analytics & BI",
      description:
        "Turn raw data into actionable insights with dashboards and analytics.",
      details:
        "Predictive analytics • Real-time BI • Decision intelligence",
    },
    {
      title: "Cloud Modernization",
      description:
        "Migrate legacy data systems to modern cloud architectures.",
      details:
        "Modern platforms • Scalable architecture • Optimization",
    },
    {
      title: "AI & Advanced Analytics",
      description:
        "Enable predictive analytics, ML-ready data and AI use cases.",
      details:
        "3× faster reporting • DSaaS • Observability • AI readiness",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">

        {/* Services Page Header */}
        <div className="section-page-header reveal">
          <SectionBadge label="SERVICES" />

          <h2>
            Turning data into{" "}
            <em>intelligence.</em>
          </h2>

          <p>
            We help enterprises build modern data foundations, unlock
            actionable insights, modernize their cloud environments, and
            accelerate AI adoption.
          </p>
        </div>

        {/* Services Cards */}
        <div className="service-grid">
          {services.map((service, index) => (
            <article
              className={`service-card reveal delay-${index + 1}`}
              key={service.title}
            >
              <div className="service-top">
                <span>{service.title}</span>
              </div>

              <p className="service-description">
                {service.description}
              </p>

              <div className="service-line"></div>

              <small>{service.details}</small>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;