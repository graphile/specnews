import React, { FC } from "react";
import { EpisodeDetails } from "../episodes";
import { AnchorEmbed } from "./AnchorEmbed";
import { Channel } from "./Channel";
import { SignupFormLight } from "./SignupForm";

export const Hero: FC<{ episode?: EpisodeDetails }> = ({ episode }) => {
  return (
    <>
      <div className="header">
        <div className="headerInner">
          <div className="headerText">
            {episode ? (
              <>
                <a className="close" href="/">
                  X
                </a>
                <h3>{episode.supertitle}</h3>
                <h1>{episode.title}</h1>
              </>
            ) : (
              <h1>GraphQL Working Group updates in minutes</h1>
            )}
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
              {episode ? null : (
                <>
                  <strong>SpecNews</strong> digests the latest GraphQL Working
                  Group happenings and delivers the highlights straight to your
                  ears, so you can stay up to date in just a few minutes every
                  month.
                </>
              )}
            </p>
            {episode ? <AnchorEmbed src={episode.embed} /> : null}
            {episode ? null : <hr />}
            {episode ? null : (
              <div>
                <SignupFormLight />
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
              </div>
            )}
          </div>
          <div className="headerGap"></div>
          {episode ? null : <div className="headerLogo"></div>}
        </div>
      </div>
    </>
  );
};
