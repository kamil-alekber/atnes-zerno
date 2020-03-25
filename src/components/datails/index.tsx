import React from "react";
import DetailsTable from "./DetailsTable";
import DetailsCard from "./DetailsCard";
import "./Details.scss";

export default function index() {
  return (
    <section id="details-section">
      <div className="details-section-content">
        <DetailsCard />
        <DetailsTable />
      </div>
    </section>
  );
}
