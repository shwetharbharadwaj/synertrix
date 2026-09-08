import React, { useState } from "react";
import SectionBadge from "../components/SectionBadge";

const industries = [
  {
    name: "Financial Services",
    desc:
      "Create trusted data foundations for faster reporting, risk intelligence and financial decision-making.",
    uses: [
      "Revenue & sales analytics",
      "Risk & performance reporting",
      "Financial forecasting",
      "Customer intelligence"
    ]
  },
  {
    name: "Retail & E-commerce",
    desc:
      "Connect customer, product and operational data to understand demand and improve every commercial decision.",
    uses: [
      "Customer 360",
      "Demand forecasting",
      "Marketing attribution",
      "Real-time analytics"
    ]
  },
  {
    name: "Healthcare & Life Sciences",
    desc:
      "Bring complex data together with governed platforms that support analytics, research and operational visibility.",
    uses: [
      "Operational reporting",
      "Data integration",
      "Predictive analytics",
      "Performance intelligence"
    ]
  },
  {
    name: "SaaS & Technology",
    desc:
      "Build scalable data architectures that give product and leadership teams a clear view of growth and operations.",
    uses: [
      "Product analytics",
      "Revenue intelligence",
      "Customer 360",
      "Real-time BI"
    ]
  },
  {
    name: "Manufacturing & Supply Chain",
    desc:
      "Turn fragmented production, inventory and supply-chain data into timely intelligence and forecasts.",
    uses: [
      "Demand forecasting",
      "Inventory intelligence",
      "Production analytics",
      "Supply-chain visibility"
    ]
  }
];

function Industries() {
  const [active, setActive] = useState(0);
  const item = industries[active];

  return (
    <section className="industry-section" id="industries">
      <div className="container">

        {/* INDUSTRIES HEADER */}
        <div className="section-page-header reveal">

          <SectionBadge label="INDUSTRIES" />

          <h2>
            Intelligence built for{" "}
            <em>real-world complexity.</em>
          </h2>

          <p>
            Domain-aware data and AI solutions designed around
            the decisions that matter most.
          </p>

        </div>

        {/* INDUSTRY SELECTOR */}
        <div className="industry-shell reveal">

          <div className="industry-tabs">
            {industries.map((x, i) => (
              <button
                key={x.name}
                type="button"
                className={
                  "industry-tab" +
                  (i === active ? " active" : "")
                }
                onClick={() => setActive(i)}
              >
                {x.name}
              </button>
            ))}
          </div>

          {/* INDUSTRY CONTENT */}
          <div className="industry-panel">

            <h3>{item.name}</h3>

            <p>{item.desc}</p>

            <ul>
              {item.uses.map((use) => (
                <li key={use}>{use}</li>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Industries;