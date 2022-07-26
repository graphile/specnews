import React from "react";
import type { EpisodeDetails } from "./interfaces";
import { Transcript, J, B, Timestamp } from "../components/Transcript";

export const ep0001: EpisodeDetails = {
  id: "ep0001",
  supertitle: "SpecNews #1",
  title: "April 2022 WG",
  embed: "https://anchor.fm/specnews/embed/episodes/1--April-2022-WG-e1jkggn",
  date: "2022-04-15",
  description: (
    <div>
      <p>
        April 2022’s working group saw the announcement of the GraphQL
        Foundation’s first conference, a preview of the future direction of
        GraphiQL, a proposal to allow unions to implement interfaces, and a
        discussion of the payload format to use for streams. Jem and Benjie give
        you the lowdown.
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
  transcript: (
    <Transcript>
      <B>
        Welcome to episode 1 of Spec News</B>
      <J>
        keeping you up to date with advances in the GraphQL Spec and related foundation projects.
      </J>
      <B>
        We're your bespectacled hosts: I'm Benjie
      </B>
      <J>
        and I'm Jem.
        April’s working group saw the announcement of the GraphQL Foundation’s first Conference
      </J>
      <B>a preview of the future direction of GraphiQL</B>
      <J>
      a proposal to allow unions to implement interfaces
      </J>
      <B>
      and a discussion of the payload format to use for streams
      </B>
      <J>
        The first item was rather exciting - Lee introduced the first official conference organised by the GraphQL Foundation. To make things easier, the conference will be colocated with OpenJSWorld on June 7th and 8th in Austin, but it's important to note that the GraphQL part is not JavaScript-specific!
      </J>
      <B>
        Rather than being an end-user conference, the audience is expected to consist of working group attendees, GraphQL implementers, and other people well versed in topics around the GraphQL specification. Very exciting - get your talk submissions in now!
      </B>
      <Timestamp>[Time Stamp] Title</Timestamp>
      <J>

      </J>
      <B>
        
      </B>
      <J>

      </J>
      <B>

      </B>
      <J>

      </J>
      <B>

      </B>
    </Transcript>
  ),
};
