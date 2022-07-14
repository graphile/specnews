import React from "react";
import type { EpisodeDetails } from "./interfaces";

export const ep0002: EpisodeDetails = {
  id: "ep0002",
  supertitle: "SpecNews #2",
  title: "May 2022 WG ",
  embed: "https://anchor.fm/specnews/embed/episodes/2--May-2022-WG-e1jkglt",
  date: "2022-05-12",
  description: (
    <div>
      <p>
        May 2022's working group saw the return of discussions around higher
        order abstract types in GraphQL, the availability of a canary release of
        client-controlled nullability, discussions around the shape of iterables
        and payloads for defer and stream and the advancement of "oneof input
        objects" to RFC stage 2. Join hosts Benjie and Jem for the details!
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
