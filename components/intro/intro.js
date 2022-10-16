import React from "react";
import Image from "next/image";
import Cover from "../../images/cover.png";
import Link from "next/link";

// Opening page

function Intro() {
  return (
    <div className="intro">
      <div className="introHeader">
        <div className="title">
          <span style={{ fontWeight: "700" }}>TestCase</span>
          <span style={{ fontWeight: "900" }}>APP</span>
        </div>
        <div className="pixel">Pixel Perfect</div>
      </div>
      <div className="introImage">
        <Image src={Cover} />
      </div>
      <div className="introStart">
        <div className="container">
          <div className="textDiv">
            <h1>Welcome to the TestCase APP!</h1>

            <p>
              We created this exercise to gain insights about your development
              skills
            </p>
          </div>

          <div className="buttonDiv">
            <Link href="/home">
              <button>Start</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
