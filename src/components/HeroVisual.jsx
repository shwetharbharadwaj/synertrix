import React from "react";

function HeroVisual() {
  return (
    <div
      className="scattered-clear-visual reveal delay-1"
      aria-label="Scattered information becoming clear information"
    >
      <div className="scattered-clear-stage">
        <div className="info-card info-1"><i></i><b>Sales</b><span>••••••</span></div>
        <div className="info-card info-2"><i></i><b>Customers</b><span>••••••</span></div>
        <div className="info-card info-3"><i></i><b>Operations</b><span>••••••</span></div>
        <div className="info-card info-4"><i></i><b>Reports</b><span>••••••</span></div>
        <div className="info-card info-5"><i></i><b>Data</b><span>••••••</span></div>
        <div className="info-card info-6"><i></i><b>More</b><span>••••••</span></div>

        <div className="clear-core">
          <span>SYNERTRIX</span>
          <strong>Clear information</strong>
        </div>

        <div className="clear-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="scattered-clear-caption">
        <span>SCATTERED</span>
        <i></i>
        <span>CLEAR</span>
      </div>
    </div>
  );
}

export default HeroVisual;
