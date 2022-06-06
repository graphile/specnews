import * as React from "react";
import type { EpisodeDetails } from "../episodes/interfaces";
import { AnchorEmbed } from "./AnchorEmbed";

export const Episode: React.FC<{ episode: EpisodeDetails }> = ({ episode }) => {
  return (
    <div className="episode">
      <div className="episodeArt"></div>
      <div className="episodeMain">
        <h5>{episode.supertitle}</h5>
        <h3>{episode.title}</h3>
        <div className="episodeMeta">
          <img
            src="https://github.com/benjie.png"
            width="20"
            height="20"
            alt="Benjie"
          />
          <img
            src="https://github.com/jemgillam.png"
            width="20"
            height="20"
            alt="Jem"
          />
          <span>{episode.date}</span>
        </div>
        <div>{episode.description}</div>
        <AnchorEmbed src={episode.embed} />
      </div>
    </div>
  );
};
