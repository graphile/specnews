import React from "react";
import type { EpisodeDetails } from "./interfaces";
import { Transcript, J, B } from "../components/Transcript";

export const ep0000: EpisodeDetails = {
  id: "ep0000",
  supertitle: "SpecNews #0",
  title: "Hello World!",
  embed: "https://anchor.fm/specnews/embed/episodes/0--Hello-World-e1jghe1",
  date: "2022-03-30",
  description: (
    <div>
      <p>
        A new podcast has arrived covering the latest news from the GraphQL
        Working Group. Hosts Jem and Benjie welcome you to the feed!
      </p>

      <p>
        Music by{" "}
        <a href="https://pixabay.com/users/zen_man-4257870/">
          Zen_Man on Pixabay
        </a>
        .
      </p>
    </div>
  ),
  transcript: (
    <Transcript>
      <B>Hey folks; welcome to Spec News, a new podcast from me, Benjie</B>
      <J>
        and from me, Jem. Since 2019 Benjie's been taking notes at most of the
        GraphQL Working Group sessions and then giving me the rundown
        afterwards.
      </J>
      <B>
        We figured, since I'm already producing a summary for one person, why
        not extend that to everyone?
      </B>
      <J>And since we both wear spectacles Spec News was born</J>
      <B>the name of course having nothing to do with the GraphQL Spec.</B>
      <J>
        Of course. Anyway, join us each month for a quickfire summary of the
        latest developments in the GraphQL Working Group
      </J>
      <B>
        and perhaps some bonus episodes from time to time spotlighting
        particular proposals
      </B>
      <J>and people!</J>
      <B>that are helping to advance GraphQL.</B>
      <J>Speak to you soon</J>
      <B>and don't forget your specs!</B>
    </Transcript>
  ),
};
