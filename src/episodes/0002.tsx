import React from "react";
import type { EpisodeDetails } from "./interfaces";
import { Transcript, J, B, Timestamp } from "../components/Transcript";

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
        and the advancement of &quot;oneof input objects&quot; to RFC stage 2.
      </B>
      <Timestamp>[0:xx] Action Items</Timestamp>
      <J>
        Action items&mdash;following up from Benjie creating a SECURITY policy
        in the graphql&#8208;wg repo, Benjie suggested extending this policy to
        all Foundation projects and gained approval to do so.
      </J>
      <Timestamp>[0:xx] Higher order abstract types</Timestamp>
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
      <Timestamp>[1:54] Unions declaring interfaces</Timestamp>
      <B>
        Next up was Yaacov with a proposal to allow unions to declare
        implementation of interfaces. After some discussion this boiled down to
        a constraint&mdash;the union doesn&apos;t itself implement the
        interfaces, instead it requires that all object types within it
        implement the interfaces&mdash;an interesting proposal. The working
        group pushed Yaacov to consider allowing fields in the interface to be
        resolved directly on the selection set (without the need for a fragment)
        for consistency with interfaces elsewhere in the spec. The balance as
        always is between simplicity and power.
      </B>
      <J>
        To advance the proposal further, Lee suggested that Yaacov:
        <ul>
          <li>
            details the impact on execution and particularly on selection sets;
          </li>
          <li>looks for and documents precedent from other languages;</li>
          <li>
            and considers if a different keyword rather than
            &quot;implements&quot; would make sense.
          </li>
        </ul>
        The proposal was advanced to RFC stage 1: &quot;Proposal&quot;.
      </J>
      <B>And may well make it harder for me to deprecate unions!</B>
      <Timestamp>[3:01] The payload format to use for streams</Timestamp>
      <J>
        Champion of the defer and stream proposals, Rob, was up next discussing
        the payload format to use for streams. It was established that nulls
        must bubble only to the boundary of the payload and no further
      </J>
      <B>(since you can&apos;t go back in time)</B>
      <J>
        indeed; however the challenge is in distinguishing between actual nulls
        and errors.
      </J>
      <B>
        For defer, the value is always an object, so returning null is obviously
        an error, but you can stream any data type.
      </B>
      <J>
        <p>
          The current proposal is that the stream data should always be wrapped
          in a list, so that nulls stand out. After discussion this was
          generally agreed.
        </p>
        <p>
          Further discussion occurred around whether the index should be
          included in the payload, and if so: where? One consideration here is
          potential future batching which was discussed in some depth, along
          with possible payload shapes for including multiple stream or defer
          payloads in the same GraphQL response payload&mdash;for example using
          an &quot;incremental&quot; field&mdash;this should help to avoid
          client &quot;thrashing&quot;.
        </p>
      </J>
      <B>
        <p>
          Definitely more investigation to be done here, but there&apos;s at
          least consensus to put the start index in the path.
        </p>
        <p>
          Yaacov then guided the conversation to the topic of &quot;async
          iterators of iterables&quot;, a rather JavaScript&#8208;specific topic
          but one which may have influence on other implementations.
        </p>
      </B>
      <J>
        It&apos;s common for other implementations to be translations of the
        reference implementation into other programming languages.
      </J>
      <B>
        The motivation around returning iterators rather than the values
        directly is one centred around efficiency; going back to the runloop
        after every value could be quite expensive compared to processing
        multiple values in the same runloop tick.
      </B>
      <J>
        The question also extended to returning the data in this shape via the
        GraphQL response, however it was pointed out that after compression the
        difference between the solutions would be marginal so this
        shouldn&apos;t be a weighty consideration. Further discussion was
        redirected to{" "}
        <a
          href="https://github.com/graphql/graphql-wg/discussions/939"
          target="_new"
        >
          GitHub discussions
        </a>{" "}
        since the meeting was over time.
      </J>
      <B>
        And with that, that's all from us at Spec News and we bid you a fond
        farewell.
      </B>
      <J>Cheerio!</J>
    </Transcript>
  ),
};
