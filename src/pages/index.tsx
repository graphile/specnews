import * as React from "react";
import episodes from "../episodes/index";
import { Episode } from "../components/Episode";
import { Channel } from "../components/Channel";
import { SignupFormLight } from "../components/SignupForm";
import "../styles/index.css";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <div>
      <Helmet
        title="SpecNews: a podcast delivering the latest highlights from the GraphQL Working Group"
        defer={false}
      >
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://specnewspod.com/" />
        <meta property="og:title" content="SpecNews: GraphQL WG Digests" />
        <meta
          property="og:description"
          content="The latest GraphQL Working Group highlights straight to your ears; stay up to date in just a few minutes every month!"
        />
        <meta
          property="og:image"
          content="https://specnewspod.com/logo/SpecNews.png"
        />
        <link
          type="application/rss+xml"
          rel="alternate"
          title="SpecNews: GraphQL digests"
          href="https://anchor.fm/s/9c882588/podcast/rss"
        />
      </Helmet>

      <div className="header">
        <div className="headerInner">
          <div className="headerText">
            <h1>GraphQL Working Group updates in minutes</h1>
            <div className="headerWho">
              <div className="headerPerson">
                <div className="headerPersonAvatar">
                  <img
                    src="/avatar/benjie.png"
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
                  <img src="/avatar/jem.jpg" width="64" height="64" alt="Jem" />
                </div>
                <div className="headerPersonName">
                  <a href="https://twitter.com/JemGillam">@JemGillam</a>
                </div>
              </div>
            </div>
            <p className="lead">
              <strong>SpecNews</strong> digests the latest GraphQL Working Group
              happenings and delivers the highlights straight to your ears, so
              you can stay up to date in just a few minutes every month.
            </p>
            <hr />
            <SignupFormLight />
            {/*
            <p>Subscribe to be notified of new episodes of SpecNews:</p>
            <form className="subscribe">
              <input placeholder="yourname@example.com" />
              <button type="submit">Subscribe</button>
            </form>
            */}
            <div className="channels">
              <Channel
                name="Spotify"
                logo="/logo/spotify-brands.svg"
                url="https://open.spotify.com/show/69vo1Wrlda6EP3EzIZnzjf"
                title="Subscribe to SpecNews on Spotify"
              />
              <Channel
                name="Apple"
                logo="/logo/podcast-solid.svg"
                url="https://podcasts.apple.com/us/podcast/specnews-graphql-digests/id1628494077"
                title="Subscribe to SpecNews on Apple Podcasts"
              />
              <Channel
                name="RSS"
                logo="/logo/square-rss-solid.svg"
                url="https://anchor.fm/s/9c882588/podcast/rss"
                title="Subscribe via RSS"
              />
              <Channel
                name="Twitter"
                logo="/logo/twitter-brands.svg"
                url="https://twitter.com/SpecNewsPod"
                title="Follow @SpecNewsPod on Twitter"
              />
            </div>
            <p>
              <small>
                (Launched 7th June 2022, more channels available shortly)
              </small>
            </p>
          </div>
          <div className="headerGap"></div>
          <div className="headerLogo"></div>
        </div>
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
