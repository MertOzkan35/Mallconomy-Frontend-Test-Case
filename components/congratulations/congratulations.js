import React from "react";
import Navbar from "../navbar";
import Image from "next/image";
import vector from "../../images/vector.png";
import Link from "next/link";

function Congratulations() {
  return (
    <div>
      <Navbar />
      <div className="cong">
        <div className="whiteBox">
          <div className="congImage">{vector && <Image src={vector} />}</div>
          <div>
            <h1>Congratulations</h1>
            <p>
              You've earned points for your participation! Keep Up the great
              work!
            </p>
          </div>
          <div className="buttonDiv">
            <Link href={`/completedactions`}>
              <button>Close</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Congratulations;
