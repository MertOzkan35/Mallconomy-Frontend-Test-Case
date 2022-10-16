import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

function Navbar() {
  // soreDBb data coming from ../store/score and render in this component
  const soreDBb = useSelector((state) => state.score.scoreDB);
  // soreDBb data coming from ../store/score and render in this component
  return (
    <div className="navbar">
      <Link href={`/home`}>
        <h1>
          <span style={{ fontWeight: "500" }}>TestCase</span>
          <span style={{ fontWeight: "900", paddingLeft: 10 }}>APP</span>
        </h1>
      </Link>
      <div className="pointsBar">
        <p>
          <span style={{ fontWeight: "500", paddingRight: 5 }}>Points :</span>
          <span style={{ fontWeight: "900" }}>{soreDBb}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Navbar;
