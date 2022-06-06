import * as React from "react";
import episodes from "../episodes/index";
import { Episode } from "../components/Episode";
import "../styles/index.css";

const IndexPage = () => {
  return (
    <div>
      <div className="header">
        <div className="headerText">
          <h1>Quick-fire summaries from the GraphQL Working Group</h1>
          <div className="headerWho">
            <div className="headerPerson">
              <div className="headerPersonAvatar">
                <img
                  src="https://avatars.githubusercontent.com/u/129910?v=4"
                  width="64"
                  height="64"
                  alt="Benjie"
                />
              </div>
              <div className="headerPersonName">
                <a href="https://twitter.com/Benjie">@Benjie</a>
              </div>
            </div>
            <div className="headerPerson">
              <div className="headerPersonAvatar">
                <img
                  src="https://github.com/jemgillam.png"
                  width="64"
                  height="64"
                  alt="Jem"
                />
              </div>
              <div className="headerPersonName">
                <a href="https://twitter.com/JemGillam">@JemGillam</a>
              </div>
            </div>
          </div>
          <p>
            We digest the latest GraphQL working group happenings and deliver
            the highlights to your ears, so you can stay on top of what's
            happening in just a few minutes every month.
          </p>
        </div>
        <div className="headerLogo"></div>
      </div>
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
