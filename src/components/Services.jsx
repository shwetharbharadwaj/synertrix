import React, { useEffect, useRef, useState } from "react";
import SectionBadge from "../components/SectionBadge";

function Services() {
  const services = [
    {
      title: "Data Engineering",
      desc: "Design and build scalable, reliable data pipelines and platforms.",
      small: "Enterprise data strategy • Integration • Transformation",
    },
    {
      title: "Analytics & BI",
      desc: "Turn raw data into actionable insights with dashboards and analytics.",
      small: "Predictive analytics • Real-time BI • Decision intelligence",
    },
    {
      title: "Cloud Modernization",
      desc: "Migrate legacy data systems to modern cloud architectures.",
      small: "Modern platforms • Scalable architecture • Optimization",
    },
    {
      title: "AI & Advanced Analytics",
      desc: "Enable predictive analytics, ML-ready data and AI use cases.",
      small: "3× faster reporting • DSaaS • Observability • AI readiness",
      featured: true,
    },
  ];

  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const showcaseRef = useRef(null);

  const openCarousel = () => setExpanded(true);

  const moveCarousel = (direction) => {
    setActiveIndex((current) => (current + direction + services.length) % services.length);
  };

  useEffect(() => {
    const node = showcaseRef.current;
    if (!node) return;

    const handleWheel = (event) => {
      if (!expanded && Math.abs(event.deltaY) > 6) {
        setExpanded(true);
        return;
      }

      if (expanded && Math.abs(event.deltaY) > 8) {
        event.preventDefault();
        moveCarousel(event.deltaY > 0 ? 1 : -1);
      }
    };

    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleWheel);
  }, [expanded]);

  const getOffset = (index) => {
    let offset = index - activeIndex;
    if (offset > services.length / 2) offset -= services.length;
    if (offset < -services.length / 2) offset += services.length;
    return offset;
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-page-header reveal">
          <SectionBadge label="SERVICES" />
          <h2>From data foundations to <em>AI outcomes.</em></h2>
          <p>
            We build end-to-end AI ecosystems that transform enterprises into
            intelligent, autonomous and data-driven organizations.
          </p>
        </div>

        <div
          ref={showcaseRef}
          className={`services-showcase ${expanded ? "is-expanded" : "is-stacked"}`}
          role={!expanded ? "button" : undefined}
          tabIndex={!expanded ? 0 : undefined}
          aria-label={!expanded ? "Open services carousel" : "Services carousel"}
          onClick={!expanded ? openCarousel : undefined}
          onKeyDown={(event) => {
            if (!expanded && (event.key === "Enter" || event.key === " ")) {
              event.preventDefault();
              openCarousel();
            }
          }}
        >
          <div className="services-deck">
            {services.map((service, index) => {
              const offset = expanded ? getOffset(index) : 0;
              const distance = Math.min(Math.abs(offset), 2);
              const x = expanded ? `${offset * 62}%` : "0";
              const scale = expanded ? (distance === 0 ? 1 : distance === 1 ? 0.9 : 0.8) : 1;
              const opacity = expanded ? (distance === 0 ? 1 : distance === 1 ? 0.72 : 0.38) : 1;

              return (
                <article
                  key={service.title}
                  className={`service-card${service.featured ? " featured" : ""}${expanded && index === activeIndex ? " is-active" : ""}`}
                  style={expanded ? {
                    "--carousel-x": x,
                    "--carousel-scale": scale,
                    "--carousel-opacity": opacity,
                    "--carousel-z": 20 - distance,
                  } : undefined}
                  onClick={(event) => {
                    if (expanded) {
                      event.stopPropagation();
                      setActiveIndex(index);
                    }
                  }}
                >
                  <div className="service-top">
                    <span className="service-kicker">0{index + 1}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.desc}</p>
                  <div className="service-line" />
                  <small>{service.small}</small>
                </article>
              );
            })}
          </div>

          {expanded && (
            <div className="services-carousel-controls" aria-label="Service navigation">
              <button type="button" onClick={(event) => { event.stopPropagation(); moveCarousel(-1); }} aria-label="Previous service">←</button>
              <div className="services-carousel-dots">
                {services.map((service, index) => (
                  <button
                    type="button"
                    key={service.title}
                    className={index === activeIndex ? "active" : ""}
                    onClick={(event) => { event.stopPropagation(); setActiveIndex(index); }}
                    aria-label={`Show ${service.title}`}
                  />
                ))}
              </div>
              <button type="button" onClick={(event) => { event.stopPropagation(); moveCarousel(1); }} aria-label="Next service">→</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;
