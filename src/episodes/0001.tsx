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
        April 2022&apos;s working group saw the announcement of the GraphQL
        Foundation&apos;s first conference, a preview of the future direction of
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
      <B x>Welcome to episode 1 of Spec News</B>
      <J x>
        keeping you up to date with advances in the GraphQL Spec and related
        foundation projects.
      </J>
      <B x>We&apos;re your bespectacled hosts: I&apos;m Benjie</B>
      <J x>
        and I&apos;m Jem.
        <br />
        <br />
        April&apos;s working group saw the announcement of the GraphQL
        Foundation&apos;s first Conference
      </J>
      <B x>a preview of the future direction of GraphiQL</B>
      <J x>a proposal to allow unions to implement interfaces</J>
      <B x>and a discussion of the payload format to use for streams</B>
      <Timestamp>[0:33] GraphQL Foundation Conference</Timestamp>
      <J>
        The first item was rather exciting&mdash;Lee introduced the{" "}
        <a href="https://graphql.org/foundation/graphql-conf/" target="_new">
          first official conference organised by the GraphQL Foundation
        </a>
        . To make things easier, the conference will be colocated with
        OpenJSWorld on June 7th and 8th in Austin, but it&apos;s important to
        note that the GraphQL part is not JavaScript&#8208;specific!
      </J>
      <B>
        Rather than being an end&#8208;user conference, the audience is expected
        to consist of working group attendees, GraphQL implementers, and other
        people well versed in topics around the GraphQL specification. Very
        exciting&mdash;get your talk submissions in now!
      </B>
      <Timestamp>[1:11] Update on GraphiQL</Timestamp>
      <J>Tim joined us to give us an update on the GraphiQL&mdash;</J>
      <B x>that&apos;s &quot;Graph i Q L&quot;: the GraphQL IDE</B>
      <J>
        &mdash;version 2 design proposals. What was presented looks fantastic: a
        minimalist and flexible design that expands as you become more familiar.
        The reception was very positive, tempered only by the working group
        attendees suggesting improvements to the design, for example allowing
        additional space for longer&#8208;form markdown documentation, improving
        discoverability of variables, and other such matters. I hope Tim found
        the feedback helpful and we can&apos;t wait to see the project advance!
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
      <B x>(since you can&apos;t go back in time)</B>
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
