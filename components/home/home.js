import React from "react";
import Navbar from "../navbar";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

function Home() {
  // DB data coming from ../store/acitons and render in this page
  const DB = useSelector((state) => state.DB.actionsDb);
  // DB data coming from ../store/acitons and render in this page
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="homeContainer">
          <div className="h3div">
            <h3>Actions to be completed</h3>
          </div>
          {DB &&
            DB.map((element, key) => {
              return (
                <Link key={key} href={`/question/${element.id}`}>
                  <div className="actionBox">
                    <div className="actionImg">
                      <Image
                        src={element.image}
                        alt=""
                        title=""
                        width="36px"
                        height="36px"
                        objectFit="contain"
                      />
                    </div>
                    <div className="actionText">
                      <h1>{element.title}</h1>
                      <p>{element.description}</p>
                    </div>
                    <div className="actionPoint">
                      <p>+{element.point} </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
