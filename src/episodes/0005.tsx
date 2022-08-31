import React from "react";
import type { EpisodeDetails } from "./interfaces";
import { Transcript, J, B, Timestamp, Code } from "../components/Transcript";

export const ep0005: EpisodeDetails = {
  id: "ep0005",
  supertitle: "SpecNews #5",
  title: "August 2022 WG",
  embed: "https://anchor.fm/specnews/embed/episodes/5--August-2022-WG-e1n7csa",
  date: "2022-08-31",
  description: (
    <div>
      <p>
        August 2022&apos;s working group meeting saw the working group moving
        closer to changing the meeting cadence, an update on the GraphQL over
        HTTP Spec, a proposal of a new STRUCT type, musing over evolving the
        definition of GraphQL, and more discussions around interfaces and
        unions.
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
      <B x>Hello GraphQL fans! Welcome to episode 5 of Spec News</B>
      <J x>
        keeping you up to date with advances in the GraphQL Spec and related
        foundation projects.
      </J>
      <B x>We&apos;re your bespectacled hosts: I&apos;m Benjie</B>
      <J x>and I&apos;m Jem.</J>
      <B x>
        August&apos;s meeting saw the working group moving closer to changing
        the meeting cadence
      </B>
      <J x>An update on the GraphQL over HTTP Spec,</J>
      <B x>A proposal of a new STRUCT type,</B>
      <J x>Musing over evolving the definition of GraphQL,</J>
      <B x>And more discussions around interfaces and unions,</B>
      <J x>Here we go!</J>
      <Timestamp>[0:XX] Meeting times and cadence</Timestamp>
      <B>
        The first discussion was meeting times and cadence. Working group
        meetings were originally three hours long, which was a bit of a slog,
        and the times were particularly difficult for those in the Asia Pacific
        timezones. We changed the meeting duration to two hours about a year
        ago, but attendees from Asia Pacific timezones still weren't attending
        because the meetings in the summer were starting at 4:00am.
      </B>
      <J>
        If you&apos;ve listened to a few episodes of SpecNews you&apos;ve
        probably gathered that two hours isn&apos;t enough for all the agenda
        items they&apos;ve been having, so they want to change the meetings
        again.
      </J>
      <B>
        <p>
          After much discussion, the conclusion was that we&apos;d move to a
          weekly meeting cadence with 1.5 hour meetings, and we&apos;d alternate
          the time between 9:30am Pacific one week (an early time, for Europe)
          and 3:30pm Pacific the next (a later time, for Asia Pacific
          timezones).
        </p>
        <p>
          This takes us from two hours a month to six hours a month, so should
          see us through for a while!
        </p>
      </B>
      <Timestamp>[1:XX] GraphQL Over HTTP update</Timestamp>
      <J>
        <p>
          Next was Benjie with GraphQL over HTTP. The subgroup wants to advance
          the spec to stage 2 and are seeking main working group approval. They
          have requested that attendees review the spec and look at the
          implementation in JavaScript from Denis, which was written from
          scratch.
        </p>
        <p>
          Lee says as it&apos;s a companion spec, it doesn&apos;t necessarily
          have to go through these stages. He likes the model of subcommittees
          owning their own project, with any specs and reference implementations
          living under the foundation. This approach lets people implement it,
          and it can live in draft mode while CLAs are signed and gaps in the
          new spec are found. It can then go through ratification with the TSC
          when it&apos;s finished.
        </p>
      </J>
      <B>
        Ivan raised that the proposed Media Type{" "}
        <Code>application/graphql</Code> should be the media type for GraphQL
        documents (i.e. what you&apos;d store in a<Code>.graphql</Code> file)
        and suggested that the GraphQL over HTTP spec should maybe use something
        more like <Code>application/graphql-response+json</Code>. There were no
        reservations to this and so the change will be made.
      </B>
      <Timestamp>[X:XX] The STRUCT type</Timestamp>
      <J>
        Then back to Benjie again for the STRUCT type. I&apos;ll let him explain
        this one.
      </J>
      <B>
        I gave the struct type the backronym &quot;Structured, Type-safe,
        Returnable and Union-Capable Type&quot; &mdash; the idea is that it
        extends input objects to the output schema, allowing us to safely expose
        things like directive arguments without having to have clients have
        their own parsers. It came out of discussions with various working group
        members about schema metadata, a topic I&apos;m heavily interested in,
        and also on my work on the
        <Code>&#64;oneOf</Code> input union type. I&apos;m hopeful that this
        type can not only solve the metadata problem for which it was designed,
        but that it can solve the input unions problem, and even enable new
        capabilities motivated by real use cases that people have shared in
        various GraphQL Spec issues on GitHub.
      </B>
      <J>
        Lee pointed out that the type sounds like a panacea and is concerned
        that it might solve many problems but in an inadequate way. He suggests
        going back a step and redefining the problem.
      </J>
      <Timestamp>[X:XX] Redefining GraphQL</Timestamp>
      <J>
        Next was Roman revisiting the topic of redefining GraphQL. He believes
        there are two separate definitions of GraphQL contained in the spec, and
        he&apos;s not happy with either. He&apos;d like the definition of
        GraphQL to centre on GraphQL as a communication protocol between client
        and server and less on how it is executed. He received a lot of
        pushback, with Michael pointing out that it&apos;s specs like the
        GraphQL over HTTP spec which are concerned with communication. Lee
        suggested Roman change his approach from an inwards-out method to
        outwards-in where he asks for input from other members of the working
        group on what they feel the domain of the spec is.
      </J>
      <Timestamp>[XX:XX] Unions and interfaces discussion</Timestamp>
      <B>
        Yaacov returned with an update on extending the polymorphic types in
        GraphQL. This month he&apos;s proposing that unions could include other
        unions or interfaces so long as the union also lists all of the types
        within that union/interface. The discussion concluded that this would be
        a maintenance headache and gave greater confidence that Yaacov&apos;s
        previous proposals were closer to the right direction.
      </B>
      <J>
        Lee closed this topic with a warning that without sufficient care this
        could lead to infinite recursion or recursion loops.
      </J>
      <Timestamp>[xx:xx] Topics for next time</Timestamp>
      <B x>
        {" "}
        Two topics were bumped to the next meeting due to a lack of time&mdash;
      </B>
      <J x>
        &mdash;Hopefully something which won&apos;t happen when the new meeting
        cadence has been approved&mdash;
      </J>
      <B x>
        specifying <Code>extensions</Code> property on requests, the RFC of
        which can be seen in{" "}
        <a
          href="https://github.com/graphql/graphql-spec/pull/976"
          target="_new"
        >
          pull request 976,
        </a>
      </B>
      <J x>
        and reordering and renaming the language and type system chapters of the
        spec, there&apos;s an{" "}
        <a
          href="https://github.com/graphql/graphql-wg/discussions/1018"
          target="_new"
        >
          open discussion on this in the working group repo
        </a>
        .
      </J>
      <B>
        Yet another packed meeting! That's all from us at Spec News and we bid
        you a fond farewell.
      </B>
      <J>Have a good one!</J>
    </Transcript>
  ),
};
