import React from "react";
import type { EpisodeDetails } from "./interfaces";
import { Transcript, J, B, Timestamp, Code } from "../components/Transcript";

export const ep0006: EpisodeDetails = {
  id: "ep0006",
  supertitle: "SpecNews #6",
  title: "September 2022 WG",
  embed:
    "https://anchor.fm/specnews/embed/episodes/6--September-2022-WG-e1oekpv",
  date: "2022-09-27",
  description: (
    <div>
      <p>
        September&apos;s meeting included the new arrangements for the meetings
        going forward, a discussion of a new RFC concerning the{" "}
        <Code>extensions</Code>
        property, <Code>@defer</Code> and <Code>@stream</Code> moved to Stage
        Two, calls for feedback on a number of smaller topics, and a
        presentation on the need for granular metadata in GraphQL.
      </p>
      <p>
        Benjie's presentation is viewable on the GraphQL Federation Youtube
        channel:{" "}
        <a
          href="https://youtu.be/MEi1u6L__Ck?t=7148"
          rel="ugc noopener noreferrer"
          target="_blank"
        >
          https://youtu.be/MEi1u6L__Ck?t=7148
        </a>{" "}
        The slides are also available at:{" "}
        <a href="" rel="ugc noopener noreferrer" target="_blank">
          https://is.gd/KmvX4e
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
  transcript: (
    <Transcript>
      <B x>Hello GraphQL fans! Welcome to episode 6 of Spec News</B>
      <J x>
        keeping you up to date with advances in the GraphQL Spec and related
        foundation projects.
      </J>
      <B x>We&apos;re your bespectacled hosts: I&apos;m Benjie</B>
      <J x>and I&apos;m Jem.</J>
      <B x>
        September&apos;s meeting included the new arrangements for the meetings
        going forward,
      </B>
      <J x>A discussion of a new RFC concerning the extensions property,</J>
      <B x>
        <Code>@defer</Code> and <Code>@stream</Code> moved to Stage 2,
      </B>
      <J x>Calls for feedback on a number of smaller topics,</J>
      <B x>And a presentation on the need for granular metadata in GraphQL.</B>
      <Timestamp>[0:36] Meeting times and cadence</Timestamp>
      <J>
        The meeting opened with a note that the Working Group meetings are
        changing from October. There will now be three GraphQL Spec Working
        Group meetings per month, two at 10:30am Pacific time on the first and
        third Thursday, targeting America and Europe, and another on the second
        Wednesday at 3:30pm Pacific time targeting America and the Asia Pacific.
      </J>
      <B>
        There will also be additional timeslots available on the alternate
        Thursdays to make space for the various GraphQL Subcommittees. The
        working group is still open to feedback on these new times, so get in
        touch - but we really hope this will increase engagement from people
        within the Asia Pacific timezones!
      </B>
      <Timestamp>
        [1:17] Specifying an <Code>extensions</Code> property on requests
      </Timestamp>
      <J>
        Now onto the meat of the discussions! First was Benjie with an RFC
        regarding the extensions property for GraphQL requests.
      </J>
      <B>
        <p>
          The GraphQL Spec details the format of a response object. To enable
          GraphQL to evolve without conflicts, an <Code>extensions</Code>{" "}
          property can be included, containing arbitrary vendor-specific
          details. Errors also have an <Code>extensions</Code> property for
          similar reasons.
        </p>
        <p>
          At the moment, the GraphQL Spec doesn&apos;t explicitly say what the
          structure of a request is, only what information is required to form a
          request.
        </p>
      </B>
      <J>
        However, the GraphQL over HTTP Spec does need to specify the request
        format. As part of that, to maintain compatibility with the ecosystem,
        it needs to specify an <Code>extensions</Code> property on requests
        which is not currently specified in the GraphQL spec itself.
      </J>
      <B>When we come to document GraphQL over other protocols</B>
      <J x>(such as websockets, server-sent events, and more)</J>
      <B>
        it will need to be defined again in each new spec. I&apos;ve been
        considering if something about this definition should live in the main
        spec to centralise this definition.
      </B>
      <J>
        David from Apollo confirmed this was an issue they have faced&mdash;they
        have been using the <Code>extensions</Code> field on requests for a
        while, and have had problems with strict servers rejecting requests
        which include it because it&apos;s not currently detailed by any
        spec&mdash;it&apos;s &quot;unexpected&quot;&mdash;
      </J>
      <B x>&mdash;excuse the pun</B>
      <J>
        The discussion concluded with two options: EITHER add an optional entry
        to the list of things in the GraphQL spec that make up a request, with a
        small section detailing its intent; OR leave it up to the
        sub-specifications to define it in a stricter way. More on this in a
        future episode!
      </J>
      <Timestamp>
        [3:01] <Code>@defer</Code> and <Code>@stream</Code> is now Stage 2:
        Draft
      </Timestamp>
      <B>
        Second was Rob with an update on the eagerly anticipated defer and
        stream spec edits… and the changes are now OFFICIALLY STAGE TWO!
        Congratulations to Rob, Lilliana, and everyone else who has been working
        hard to make stream and defer a reality!
      </B>
      <J>The latest issue in stream and defer was spotted by our own Benjie:</J>
      <B>
        It relates to the handling of non-nullable fields throwing errors as
        siblings of (rather than children of) stream and defer boundaries. The
        sibling non-nullable error should wipe out the selection set, but due to
        GraphQL&apos;s parallel execution the stream may already have started
        executing when the error is thrown and the stream wasn&apos;t being
        cancelled, leading to payloads arriving that reference paths that
        shouldn&apos;t exist. A number of potential solutions were discussed, so
        this should not prevent the proposal moving forward.
      </B>
      <J>
        <Code>@stream/@defer</Code> is by far the most complicated addition to
        GraphQL since it was open sourced, so there&apos;s still some work
        needed in the form of developing and writing lots of support material to
        help it be adopted in the wider ecosystem. Now it&apos;s at Stage 2,
        that kind of work can commence.
      </J>
      <Timestamp>
        [4:17] <Code>isSubType</Code>, <Code>resolveAbstractType</Code> and the
        &quot;Expanding subtyping&quot; RFC
      </Timestamp>
      <B>
        Moving on, Yaccov asked for feedback on three small modifications to the
        GraphQL spec: <Code>isSubType</Code>, <Code>resolveAbstractType</Code>{" "}
        and the &quot;Expanding subtyping&quot; RFC. These pull requests can be
        found in the main Spec repo (
        <a
          href="https://github.com/graphql/graphql-spec/pull/977"
          rel="ugc noopener noreferrer"
          target="_blank"
        >
          {" "}
          <Code>isSubType</Code>
        </a>
        ,{" "}
        <a
          href="https://github.com/graphql/graphql-spec/pull/973"
          rel="ugc noopener noreferrer"
          target="_blank"
        >
          <Code>resolveAbstractType</Code>
        </a>
        ) and{" "}
        <a
          href="https://github.com/graphql/graphql-wg/blob/main/rfcs/ExpandingSubtyping.md"
          rel="ugc noopener noreferrer"
          target="_blank"
        >
          the Working Group repo
        </a>
        . Lee marked the <Code>isSubType</Code> PR as an editorial change and
        decided to merge it then and there in order to allow Yaccov to progress
        on his other discussions.
      </B>
      <Timestamp>[4:44] The &quot;schema&quot; keyword</Timestamp>
      <J>
        Whilst reviewing Roman&apos;s suggestion to remove a particular
        paragraph from the spec, Benjie spotted an issue in its wording which
        revealed ambiguity around when the &quot;schema&quot; keyword should be
        omitted from GraphQL SDL. Benjie has carefully rewritten the language
        here and in the neighbouring paragraph, and there&apos;s general
        agreement that after dropping a couple of words the fix should be
        implemented.
      </J>
      <Timestamp>[5:08] Granular metadata in GraphQL</Timestamp>
      <J>
        Finally, Lee suggested that Benjie present his slides detailing his
        argument for why there is a need for granular metadata in GraphQL.
      </J>
      <B>
        I feel this topic is currently being overlooked in the discussions
        around schema metadata, and yet could open up some significant
        improvements in the usefulness of schema introspection at
        runtime&mdash;for example allowing for dropdowns to be generated by
        enums, for dynamic tables to be generated from introspection data, or
        for pagination limits to be indicated via the schema introspection and
        respected by clients without requiring new versions of the clients to be
        released
      </B>
      <J x>
        (for example, mobile apps would not have to wait on App Store review to
        release these kinds of minor changes!)
      </J>
      <B>
        The{" "}
        <a
          href="https://is.gd/KmvX4e"
          rel="ugc noopener noreferrer"
          target="_blank"
        >
          slides are linked in the podcast episode notes
        </a>
        , they are designed to be readable without narration. (Youtube link:{" "}
        <a
          href="https://youtu.be/MEi1u6L__Ck?t=7148"
          rel="ugc noopener noreferrer"
          target="_blank"
        >
          https://youtu.be/MEi1u6L__Ck?t=7148
        </a>
        )
      </B>
      <J>
        Lee suggested that it&apos;s quite common to block introspection
        queries, which may limit who can use this
      </J>
      <B x>
        (though I feel that blocking introspection queries is
        security-through-obscurity at best, and more likely a false sense of
        security in most cases&mdash;persisted operations being a better
        solution in many cases).
      </B>
      <J>
        Benjie stresses that whatever solution is reached by the metadata
        discussions should be careful not to limit these different use cases of
        GraphQL unless there's a very good reason to do so.
      </J>
      <B>
        And so, that brings us to the end of the meeting, and the end of the
        podcast, we bid you a fond farewell.
      </B>
      <J>Bye for now!</J>
    </Transcript>
  ),
};
