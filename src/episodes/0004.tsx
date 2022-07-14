import React from "react";
import type { EpisodeDetails } from "./interfaces";

export const ep0004: EpisodeDetails = {
  id: "ep0004",
  supertitle: "SpecNews #4",
  title: "July 2022 WG",
  embed: "https://anchor.fm/specnews/embed/episodes/4--July-2022-WG-e1l5vdr",
  date: "2022-07-07",
  description: (
    <div>
      <p>
        July 2022&apos;s working-group-meeting saw discussion around adding
        directives to existing enum values, adding "schema metadata" to SDL and
        introspection, allowing recursion when resolving the concrete object
        type of a value representing an interface or union type, an update from
        the GraphQL-over-HTTP working group, and an update on the defer and
        stream RFC.
      </p>
      <p>
        Benjie&apos;s GraphQL Conference talk on Schema Metadata:{" "}
        <a
          href="https://www.youtube.com/watch?v=c1oa7p73rTw"
          rel="ugc noopener noreferrer"
          target="_blank"
        >
          youtube.com/watch?v=c1oa7p73rTw
        </a>
      </p>
      <p>
        Music by{" "}
        <a
          href="https://pixabay.com/users/zen_man-4257870/"
          rel="ugc noopener noreferrer"
          target="_blank"
        >
          Zen_Man on Pixabay
        </a>
        .
      </p>
    </div>
  ),
};
