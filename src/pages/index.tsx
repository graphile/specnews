import * as React from "react";
import episodes from "../episodes/index";
import { Episode } from "../components/Episode";
import "../styles/index.css";
import { Hero } from "../components/Hero";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <div className="main">
        <main>
          {episodes.map((e, i) => (
            <Episode key={i} episode={e} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
