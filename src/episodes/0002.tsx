import React from "react";
import type { EpisodeDetails } from "./interfaces";
import { Transcript, J, B, Timestamp, Code } from "../components/Transcript";

export const ep0002: EpisodeDetails = {
  id: "ep0002",
  supertitle: "SpecNews #2",
  title: "May 2022 WG ",
  embed: "https://anchor.fm/specnews/embed/episodes/2--May-2022-WG-e1jkglt",
  date: "2022-05-12",
  description: (
    <div>
      <p>
        May 2022&apos;s working group saw the return of discussions around
        higher order abstract types in GraphQL, the availability of a canary
        release of client-controlled nullability, discussions around the shape
        of iterables and payloads for defer and stream and the advancement of{" "}
        <Code>&#64;oneof</Code> input objects to RFC stage 2. Join hosts Benjie
        and Jem for the details!
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
      <B>Welcome to episode 2 of Spec News</B>
      <J>
        keeping you up to date with advances in the GraphQL Spec and related
        foundation projects.
      </J>
      <B>We&apos;re your bespectacled hosts: I&apos;m Benjie</B>
      <J>
        and I&apos;m Jem.
        <p>
          May&apos;s working group saw the return of discussions around higher
          order abstract types in GraphQL
        </p>
      </J>
      <B>
        the availability of a canary release of client&#8208;controlled
        nullability
      </B>
      <J>
        discussions around the shape of iterables and payloads for defer and
        stream
      </J>
      <B>
        and the advancement of <Code>&#64;oneof</Code> input objects&quot; to
        RFC stage 2.
      </B>
      <Timestamp>[0:34] Action Items</Timestamp>
      <J>
        Action items&mdash;following up from Benjie creating a SECURITY policy
        in the graphql&#8208;wg repo, Benjie suggested extending this policy to
        all Foundation projects and gained approval to do so.
      </J>
      <Timestamp>[0:51] Higher order abstract types</Timestamp>
      <B>
        Yaacov returned with a new proposal following up from the &quot;unions
        implementing interfaces&quot; proposal from the last working group. This
        new proposal introduces a new type, the &quot;intersection type&quot;,
        which would allow us to apply tighter constraints to the abstract types
        used in a GraphQL schema. Yaacov believes that &quot;second order
        abstract types&quot; would be a good addition to the GraphQL language.
      </B>
      <J>
        One of the issues raised was that this approach could lead to silent
        failures, where something does not meet the constraints and is
        unexpectedly silently omitted rather than noisily failing. There is,
        however, interest in this issue being solved as it allows clients to
        rely on fields existing on types that are newly added to a union.
      </J>
      <B>
        Lee cautioned us that implicit versus explicit is generally a tradeoff
        against expressiveness&mdash;the more expressive you can be, the closer
        you are to Turing completeness, and you have to do more work to compute
        the effects of your actions. GraphQL has been designed carefully to make
        things obvious by just looking at local types&mdash;without having to
        follow chains&mdash;and an abstract type over abstract types would break
        that.
      </B>
      <J>
        This revelation gave greater confidence in Yaacov&apos;s original
        proposal to constrain unions to only include types that implement
        certain interfaces. Yaacov is going to refine the tests ready for next
        working group.
      </J>
      <Timestamp>[2:18] Client&#8208;controlled nullability update</Timestamp>
      <B>
        Alex returned with an update on the status of client&#8208;controlled
        nullability: there's a canary release of the functionality in
        graphql&#8208;js and the latest HotChocolate supports it in .NET too.
        Apollo are also working on support for it.
      </B>
      <J>
        One of the concerns raised was that applying client&#8208;controlled
        nullability operators in one fragment may break another fragment
        that&apos;s defined in another part of the codebase; though this
        isn&apos;t something that should stop the proposal, it&apos;s definitely
        a trade&#8208;off worth being aware of.
      </J>
      <B>
        Lee tasked Alex with creating discussion threads to help resolve the
        outstanding questions with the proposals. A discussion around naming
        arose again, suggesting that &quot;assertion&quot; may be a better name
        for the bang symbol, and &quot;error boundary&quot; for the question
        mark symbol.
      </B>
      <J>
        Ivan is keen to establish the names before they get merged into
        GraphQL&#8208;js for fear of future breaking changes.
      </J>
      <Timestamp>
        [3:15] Defer/Stream: asynchronous iterators of iterables versus of items
      </Timestamp>
      <B>
        Yaacov next with a continuation of the asynchronous iterators of
        iterables topic from last meeting.
      </B>
      <J>
        There was general agreement that if we have batches of data available to
        us on the backend, we should deliver batches of data to the
        client&mdash;not least because it influences the way that clients will
        handle these payloads. However, returning iterators where a VALUE would
        normally be expected&mdash;simply because it&apos;s a stream&mdash;would
        be surprising and would give a strange developer experience.
      </J>
      <B>
        However, enforcing that an iterator is always returned might help avoid
        developers facing the trap that is client thrashing. At this point,
        discussion seemed to be relatively javascript&#8208;centric, so was
        redirected to asynchronous channels.
      </B>
      <Timestamp>[4:04] Defer/Stream: Stream Payload index format</Timestamp>
      <J>
        Rob returned with discussion of the index format in stream payloads; it
        has been established since the last working group that including the
        index is essential otherwise ambiguities can occur. Since the
        append&#8208;only mechanism has been ruled out, discussion centered
        around choosing between &quot;at index&quot;, &quot;at indices&quot; and
        &quot;including the index in the path&quot;.
      </J>
      <B>
        The conclusion was that the operation is &quot;set at a range, where the
        range starts at the index given in the path, and the length of the range
        is the length of the data.&quot; Though this makes
        out&#8208;of&#8208;order delivery and sparse lists trickier, it was
        agreed that the benefits in terms of simplicity outweighed these
        concerns.
      </B>
      <Timestamp>
        [4:50] <Code>&#64;oneof</Code> input objects RFC
      </Timestamp>
      <J>
        Next up was Benjie with a request to advance <Code>&#64;oneof</Code>{" "}
        input objects to RFC stage 2: &quot;Draft&quot;. Benjie&apos;s main
        hesitation is around intent to extend <Code>&#64;oneof</Code> to output
        types&mdash;concerned that if we never choose to add oneof to output
        types then the significant differences between <Code>&#64;oneof</Code>{" "}
        inputs versus unions and interfaces could make it undesirable. The
        working group reassured that <Code>&#64;oneof</Code> input objects seems
        to be the better input union solution independent of whether it&apos;s
        available on output or not.
      </J>
      <B>
        Having established that, it was clear that the proposal was ready to
        advance and has been raised to RFC2 status. And with that, the meeting
        drew to an end a mere one minute over time, and that's all from us at
        Spec News! We bid you a fond farewell.
      </B>
      <J>Ta ra!</J>
    </Transcript>
  ),
};
