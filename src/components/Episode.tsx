import * as React from "react";
import type { EpisodeDetails } from "../episodes/interfaces";
import { AnchorEmbed } from "./AnchorEmbed";

export const Episode: React.FC<{ episode: EpisodeDetails; full?: boolean }> = ({
  episode,
  full = false,
}) => {
  return (
    <div className="episode">
      <div className="episodeArt"></div>
      <div className="episodeMain">
        <div className="episodeTitles">
          <h5 id={episode.id}>
            {full ? (
              episode.supertitle
            ) : (
              <a href={`/${episode.id}`}>{episode.supertitle}</a>
            )}
          </h5>
          <h3>
            {full ? (
              episode.title
            ) : (
              <a href={`/${episode.id}`}>{episode.title}</a>
            )}
          </h3>
        </div>
        <div className="episodeMeta">
          <img src="/avatar/benjie.png" width="20" height="20" alt="Benjie" />
          <img src="/avatar/jem.jpg" width="20" height="20" alt="Jem" />
          <span>{episode.date}</span>
        </div>
        <div>{episode.description}</div>
        <AnchorEmbed src={episode.embed} />
      </div>
    </div>
  );
};
