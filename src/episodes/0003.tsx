import React from "react";
import type { EpisodeDetails } from "./interfaces";
import { Transcript, J, B, Timestamp, Code } from "../components/Transcript";

export const ep0003: EpisodeDetails = {
  id: "ep0003",
  supertitle: "SpecNews #3",
  title: "June 2022 WG",
  embed: "https://anchor.fm/specnews/embed/episodes/3--June-2022-WG-e1jkq0r",
  date: "2022-06-07",
  description: (
    <div>
      <p>
        June 2022&apos;s working group meeting saw the closure of a number of
        action items, the introduction of a new &quot;composite schemas&quot;
        working group, a discussion around an <Code>&#64;experimental</Code>{" "}
        directive, a new validation rule to assert operation types exist, an
        update on the client-controlled nullability, <Code>&#64;oneOf</Code>,
        and &quot;unions implementing interfaces&quot; RFCs and a number of
        spicy takes on the GraphQL spec itself!
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
      <B x>Welcome to episode 3 of Spec News</B>
      <J x>
        keeping you up to date with advances in the GraphQL Spec and related
        foundation projects.
      </J>
      <B x>We&apos;re your bespectacled hosts: I&apos;m Benjie</B>
      <J x>
        and I&apos;m Jem. <br />
        <br />
        June 2022&apos;s working-group-meeting saw the closure of a number of
        action items
      </J>
      <B x>
        the introduction of a new &quot;composite schemas&quot; working group
      </B>
      <J x>
        a discussion around an <Code>&#64;experimental</Code> directive
      </J>
      <B x>a new validation rule to assert operation types exist</B>
      <J x>
        an update on the client-controlled nullability, <Code>&#64;oneOf</Code>,
        and &quot;unions implementing interfaces&quot; RFCs
      </J>
      <B x>
        and a number of spicy takes on the GraphQL spec itself&mdash;let&apos;s
        get into it!
      </B>
      <Timestamp>[0:45] Action items</Timestamp>
      <J>
        <p>
          First up: action items. Benjie has added a SECURITY document to the
          .github repo so all foundation projects now have a security policy.
          Further, he submitted an editorial PR clarifying that the term
          &quot;request&quot; is independent of transport&mdash;i.e. it does not
          refer to an HTTP request.
        </p>
        <p>
          Benjie also raised awareness of a suggestion to either increase the
          length of the working group meetings, or to increase their cadence,
          and predicted that this meeting would overrun. Before March 2021, the
          meetings were 3 hours long, but were shortened to 2 hours to help make
          attendance easier. Further discussion should take place in{" "}
          <a
            href="https://github.com/graphql/graphql-wg/issues/988"
            target="_new"
          >
            working group issue #988
          </a>
          .
        </p>
      </J>
      <Timestamp>[1:30] Composite schemas working group</Timestamp>
      <B>
        The composite schemas working group was proposed by yours truly&mdash;a
        working group to look at the commonality between all the various
        &quot;composite schema&quot; approaches: stitching, merging, federation,
        joins, etc. It gained significant interest and all the key players were
        already on board when the spec working group officially approved it as a
        subcommittee. Interested parties should add themselves to the{" "}
        <a
          href="https://github.com/graphql/graphql-wg/blob/main/rfcs/CompositeSchemas.md"
          target="_new"
        >
          RFC document via pull request
        </a>
        , and an initial meeting will be announced in the next few weeks.
      </B>
      <Timestamp>
        [2:02] <Code>&#64;experimental</Code> directive
      </Timestamp>
      <J>
        New attendee Martin has proposed a new <Code>&#64;experimental</Code>{" "}
        directive&mdash;
      </J>
      <B x>that's a directive named &quot;experimental&quot;</B>
      <J>
        <p>
          &mdash;which is the counterpart of deprecated. Where{" "}
          <Code>&#64;deprecated</Code> marks a previously stable field as one
          which you should no longer use, <Code>&#64;experimental</Code> marks a
          new field as unstable and so not suitable for production usage yet.
        </p>
        <p>
          There was a lot of interest and discussion around the proposal, with
          comments indicating similar functionality was already in use at
          GitHub, Netflix and other companies; showing it's definitely a need.
          Next steps are to explore alternative solutions, such as creating an{" "}
          <Code>&#64;opt-in</Code> directive&mdash;
        </p>
      </J>
      <B x>that's a directive named &quot;opt-in&quot;</B>
      <J>&mdash;which could work a little like feature flagging.</J>
      <Timestamp>
        [2:48] Add validation rule that operation types exist
      </Timestamp>
      <B>
        Another new attendee, Ben, has pointed out that the GraphQL Spec doesn't
        have a validation rule to prevent mutation operations against a schema
        that does not support mutations; of course they won't actually execute,
        but this lack of validation causes confusing results in tooling.{" "}
        <a
          href="https://github.com/graphql/graphql-spec/pull/955"
          target="_new"
        >
          Ben has proposed to add this simple validation rule
        </a>{" "}
        and it immediately jumped to RFC1 without any pushback; I imagine it has
        a very good chance of becoming RFC2 at the next working group since it
        already has an implementation in place.
      </B>
      <Timestamp>[3:19] Client-controlled nullability update</Timestamp>
      <J>
        Client-controlled nullability champion Alex has raised discussion
        threads around both{" "}
        <a
          href="https://github.com/graphql/graphql-wg/discussions/965"
          target="_new"
        >
          the naming of the RFC itself
        </a>
        , and around{" "}
        <a
          href="https://github.com/graphql/graphql-wg/discussions/994"
          target="_new"
        >
          the naming of the symbols in the AST
        </a>
        .
      </J>
      <B>
        For those unfamiliar, client-controlled nullability was originally
        proposed to allow the client to indicate that it wanted to override the
        nullability of a given field by applying an operator to it, though
        it&apos;s evolved since then to be more akin to <Code>try-catch</Code>,
        hence the search for a new name.
      </B>
      <J>
        Whilst giving us an update, Alex let us know that the operators now need
        to strictly match during field merging; a restriction that wasn't
        previously the case. Though Relay plans to strip the operators before
        sending to the server, this may cause issues for other clients that rely
        on fragment isolation. Alex will be providing more details about it
        soon.
      </J>
      <B>
        And then something unprecedented happened… we voted through the power of
        emoji to take a 4 minute break!
      </B>
      <Timestamp>
        [4:15] <Code>&#64;oneOf</Code> update
      </Timestamp>
      <J>
        <p>
          Returning to the meeting, Benjie gave an update on the{" "}
          <Code>&#64;oneOf</Code> input objects RFC. This RFC achieved RFC2
          during the <a href="/ep0002">May working group</a>, and is currently
          flirting with RFC3&mdash;though it&apos;s not getting anywhere yet!
        </p>
        <p>
          A couple of small changes were made: the introspection field{" "}
          <Code>oneOf</Code> was renamed to <Code>isOneOf</Code> to match{" "}
          <Code>isDeprecated</Code>, and a rule was added forbidding{" "}
          <Code>&#64;oneOf</Code> to be applied to an input object extension.
          Benjie also raised a draft PR for <Code>&#64;oneOf</Code>{" "}
          objects&mdash;
        </p>
      </J>
      <B x>
        i.e. <Code>&#64;oneOf</Code> for outputs rather than inputs
      </B>
      <J>
        <p>
          &mdash;and that was immediately marked RFC zero. The purpose of this
          work in progress RFC was to determine if there was likely to be any
          inconsistencies between an input <Code>&#64;oneOf</Code> and an output{" "}
          <Code>&#64;oneOf</Code>; the main outcome of which was questions
          around whether the unselected fields must be omitted, or can be
          included but null.
        </p>
        <p>
          The desire is still to omit them, but it was worth the investigation.
        </p>
        <p>
          The working group are still uncertain around the expressed nullability
          of <Code>&#64;oneOf</Code> input fields, this still seems to be the
          main sticking point. A suggestion around changing the representation
          of <Code>&#64;oneOf</Code> in the SDL syntax was quickly shot down, a
          directive is the preferred approach due to the reduced complexity
          there.
        </p>
      </J>
      <Timestamp>[5:39] Unions implementing interfaces</Timestamp>
      <B>
        <p>
          Yaacov returned with an update on &quot;unions implementing
          interfaces&quot;. There was a question around the <Code>fields</Code>{" "}
          introspection property for a union that implements interfaces;
          normally a union does not have fields, but as Lee points out
          everything that implements interfaces right now must also declare its
          fields. To progress this RFC further, Yaacov must demonstrate that the
          value added by the feature outweighs the additional complexity it
          introduces.
        </p>
        <p>
          Yaacov then went on to talk about an alternative proposal&mdash;the
          ability to include interfaces and unions within a union.
        </p>
      </B>
      <J>
        Currently unions may only contain concrete object types, not abstract
        types.
      </J>
      <B>
        Yaacov feels that this change would be simpler, but the non-obvious
        introspection consequences made Lee rather nervous. Though schema build
        tooling could mostly handle this concern, there is value in reflecting
        the underlying unions and interfaces through introspection as it may
        improve legibility of the API in tools such as GraphiQL. Yaacov
        commented that his main motivations are addressing the needs that people
        are expressing via the GraphQL Spec issues repository, so even if we
        don't solve these problems at least explaining why we haven't solved
        them would be a valuable outcome.
      </B>
      <J>Valuable indeed!</J>
      <Timestamp>[6:58] Editorial changes to the Spec</Timestamp>
      <J>
        Next up was Roman who recently{" "}
        <a
          href="https://github.com/graphql/graphql-wg/discussions/969"
          target="_new"
        >
          filed a discussion against the GraphQL Spec
        </a>{" "}
        containing 29 small issues in the spec. Lee advised that splitting the
        issues into smaller pull requests and issues, one per topic, would make
        them much easier to address as it would be much easier for people to
        weigh in. More in-depth issues could be raised as proposals.
      </J>
      <B>
        Roman went on to give a 10 minute presentation on the issues he saw in
        the specification, sharing with the working group his understanding of
        the publishing industry, suggesting significant restructuring of the
        specification and a number of spicy takes including suggesting that many
        of the algorithms in the specification should be removed in order to
        make it shorter and to &quot;not offend programmers&quot;.
      </B>
      <J>
        Unfortunately the meeting overran so there wasn&apos;t much time to
        discuss these takes, nor to hear Ivan&apos;s eagerly awaited proposal to
        solve adding metadata to the introspection system, but I&apos;m sure
        we&apos;ll have time for these things in future working groups.
      </J>
      <B>
        And with that, that&apos;s all from us at Spec News and we bid you a
        fond farewell.
      </B>
      <J>Laters gators!</J>
    </Transcript>
  ),
};
