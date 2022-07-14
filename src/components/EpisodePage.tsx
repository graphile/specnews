import React, { FC, ReactElement, ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { EpisodeDetails } from "../episodes";
import { AnchorEmbed } from "./AnchorEmbed";
import { Episode } from "./Episode";
import { Hero } from "./Hero";
import { Meta } from "./Meta";

function reactToText(el: ReactElement): string {
  const str = renderToString(el);
  return str
    .replace(/(<\/p>|<br\s*\/?>)/g, "\n")
    .replace(/<[^>]+>/g, "")
    .trim();
}

export const EpisodePage: FC<{ episode: EpisodeDetails }> = ({ episode }) => {
  return (
    <div>
      <Meta
        title={episode.supertitle + ": " + episode.title}
        url={`https://specnewspod.com/${episode.id}`}
        description={
          episode.description ? reactToText(episode.description) : undefined
        }
      />
      <Hero episode={episode} />
      <div className="main">
        <main>
          {episode.transcript ? (
            <div>
              <h2>Transcript</h2>
              {episode.transcript}
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
};
