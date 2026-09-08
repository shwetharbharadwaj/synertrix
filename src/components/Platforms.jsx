import React from "react";
import SectionBadge from "../components/SectionBadge";

const A = "/assets/";

const platforms = [
  ["Google Cloud", "Google Cloud Logo.png"],
  ["Microsoft Azure", "Azure.png"],
  ["Oracle", "Oracle.png"],
  ["Salesforce", "salesforce-transparent.png"],
  ["Snowflake", "Snowflake.png"],
  ["Databricks", "Databricks.png"],
  ["BigQuery", "BigQuery.png"],
  ["Power BI", "PowerBI.png"],
  ["Looker", "Google Looker Studio.png"],
  ["Tableau", "Tableau.png"],
  ["Qlik", "QlikQ.png"]
];

function Platforms() {
  const loop = [...platforms, ...platforms];

  return (
    <section className="platform-section" id="platforms">
      <div className="container">

        {/* PLATFORMS HEADER */}
        <div className="section-page-header reveal">

          <SectionBadge label="PLATFORMS" />

          <h2>
            Built across the{" "}
            <em>ecosystems</em> enterprises already trust.
          </h2>

        </div>

        {/* LOGO MARQUEE */}
        <div className="platform-marquee logo-marquee">

          <div className="platform-track logo-track">

            {loop.map(([name, file], index) => (
              <div
                className="platform-logo-item"
                key={name + index}
              >
                <img
                  src={A + "Tech Logos/" + file}
                  alt={index >= platforms.length ? "" : name}
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Platforms;