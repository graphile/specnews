import React from "react";
import type { EpisodeDetails } from "./interfaces";
import { Transcript, J, B, Timestamp, Code } from "../components/Transcript";

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
  transcript: (
    <Transcript>
      <B x>Hello GraphQL fans! Welcome to episode 4 of Spec News</B>
      <J x>
        keeping you up to date with advances in the GraphQL Spec and related
        foundation projects.
      </J>
      <B x>We&apos;re your bespectacled hosts: I&apos;m Benjie</B>
      <J x>
        and I&apos;m Jem.
        <br />
        <br />
        July 2022&apos;s working group meeting saw discussion around adding
        directives to existing enum values,
      </J>
      <B x>adding &quot;schema metadata&quot; to SDL and introspection,</B>
      <J x>
        allowing recursion when resolving the concrete object type of a value
        representing an interface or union type,
      </J>
      <B x>an update from the GraphQL-over-HTTP working group,</B>
      <J x>and an update on the defer and stream RFC.</J>
      <Timestamp>[0:40] Action items</Timestamp>
      <B>
        <p>Here we go!</p>
        <p>
          First up, action items. There were two action items from June&apos;s
          meeting, both of which have been addressed:
          <ul>
            <li>
              the composite schemas working group has been created and is due to
              meet on Thursday 14th July
            </li>
            <li>
              a number of discussions and pull requests have been created (and
              some merged) related to Roman's specification feedback.
            </li>
          </ul>
        </p>
      </B>
      <J>
        From the backlog:
        <ul>
          <li>
            The "deprecation of input values" has passed Lee's final editorial
            review and is now in the draft specification! 🎉
          </li>
          <li>
            Rob is still progressing the stream and defer RFC&mdash;more on that
            later.
          </li>
        </ul>
      </J>
      <Timestamp>[1:15] Adding directives to existing enum values</Timestamp>
      <B>On to the main agenda.</B>
      <J>
        This month&apos;s first topic came from new Working Group member Benoit.
        Benoit wants to control how enums are mapped into their native values on
        certain clients. To do this, he wishes to use the GraphQL &quot;type
        extensions&quot; syntax to add directives to existing enum values.
      </J>
      <B>
        The type extensions syntax in GraphQL allows you to add directives to
        existing types and to add enum values to enum types, but it does not
        allow you to add directives to existing enum values of an enum type.
        Similarly, it does&apos;t allow you to add directives to an existing
        field of an object or interface type, even though it can be used to add
        new fields.
      </B>
      <J>
        <p>
          Lee explained that the type extensions capability in GraphQL is
          deliberately very simple. If we were to enable this behaviour on enum
          values, we&apos;d also expect to have this behaviour on object type
          fields, which are complex due to field arguments.
        </p>
        <p>
          Michael suggested a custom merge strategy and Matt shared that
          Facebook uses a custom merge strategy with client-only schema files.
          Lee suggested the group should revisit the problem itself rather than
          the proposed solution&mdash;perhaps there&apos;s other ways to apply
          this metadata to the enum values without using the type extensions
          syntax. In chat many expressed that this might be a good topic for the
          composite schemas working group. Stephen shared that Shopify has a
          dedicated system they use internally for merging metadata back into
          the schema which allows for different teams to own different parts of
          the metadata.
        </p>
      </J>
      <B>
        Hopefully Benoit will return to a future working group meeting with an
        updated proposal inspired by this feedback.
      </B>
      <Timestamp>[2:53] Schema metadata</Timestamp>
      <B>
        <p>
          Next up was the eagerly awaited presentation from Ivan on adding
          schema &quot;meta&quot; fields to the SDL and introspection.
        </p>
        <p>
          In his presentation, Ivan showed that there are currently two main
          approaches to add metadata to a GraphQL schema. One is the
          &quot;SDL&quot; approach&mdash;as used in Apollo
          Federation&mdash;where the schema contains a string field containing a
          GraphQL document composed of the schema definition and additional
          metadata in the form of directives. The other is the &quot;applied
          directives&quot; approach&mdash;as used in GraphQL Java, Hot Chocolate
          and others&mdash;whereby directives applied when building the GraphQL
          schema would be exposed through the introspection schema.
        </p>
      </B>
      <J>
        Ivan noted Benjie did a{" "}
        <a href="https://www.youtube.com/watch?v=c1oa7p73rTw" target="_new">
          great talk on the need for GraphQL Schema metadata
        </a>{" "}
        at the recent GraphQL Conference&mdash;there&apos;s a link in this
        episode&apos;s description.
      </J>
      <B>
        Focussing on the introspection direction, Ivan surfaced some of the
        shortcomings of the &quot;applied directives&quot; solution. One issue
        is that due to directives being repeatable and having significant order
        they would have to be exposed as a list, which is not an ideal way for
        clients to consume metadata.
      </B>
      <J>
        <p>
          Ivan suggested making metadata a first class citizen using the{" "}
          <Code>+</Code> symbol in SDL syntax and exposing via <Code>meta</Code>{" "}
          fields in introspection.
        </p>
        <p>After a short break&mdash;</p>
      </J>
      <B x> I like this new trend!</B>
      <J>
        &mdash;we returned on the hour for Roman to present his counter
        arguments, suggesting that we explore the appliedDirectives approach
        more thoroughly.
      </J>
      <B>
        Roman feels that directives are already metadata, the term being a
        &quot;historical accident&quot;, and does not want to add another
        metadata approach. Further, he believes that since directives are
        committed to git, and git should not contain secrets, all directives are
        suitable to expose to end users.
      </B>
      <J>
        Since the group were already well over time they agreed Ivan should
        raise a discussion thread and then moved on to the next topic.
      </J>
      <Timestamp>
        [4:45] Allowing recursion within <Code>ResolveAbstractValue</Code>
      </Timestamp>
      <J>
        Yaacov suggested a small change to the specification to allow for the{" "}
        <Code>ResolveAbstractType</Code> algorithm to enable
        recursion&mdash;motivated by the new &quot;interfaces implementing
        interfaces&quot; feature of GraphQL.
      </J>
      <B>
        <p>
          This <Code>ResolveAbstractType</Code> algorithm is responsible for
          taking a runtime value associated with an abstract type (i.e. an
          interface or union) and figuring out which concrete object type the
          value represents.
        </p>
        <p>Currently the specification states:</p>
        <p>
          Return the result of calling the internal method provided by the type
          system for determining the Object type of abstractType given the value
          objectValue.
        </p>
      </B>
      <J>
        Yaacov suggested this &quot;internal method&quot; could return an
        intermediate type and have GraphQL recurse, rather than having to return
        the final object type directly (perhaps via recursion in user space).
      </J>
      <B>
        The group were still running short on time, so no specific conclusion
        was reached but Lee and others will give some feedback on the pull
        request.
      </B>
      <Timestamp>[5:41] GraphQL over HTTP</Timestamp>
      <J>
        Next up was Benjie with a small update from the GraphQL over HTTP
        subcommittee
      </J>
      <B>
        After an extended hiatus, we were interested in pumping some life back
        into this subcommittee. I kicked us off by rewriting the draft
        specification with a focus on backwards compatibility and introducing a
        watershed date of 1st January 2025.
      </B>
      <J>
        The watershed states that from this date all GraphQL services must
        support the new <Code>application/graphql+json</Code> media type which
        would finally allow for GraphQL errors to safely be included in non-200
        status code HTTP responses.
      </J>
      <B>
        Other members of the subcommittee have weighed in to help us get the
        spec much closer to being release worthy. The GraphQL-over-HTTP
        subcommittee met in June for the first time since 2020 and are due to
        meet again on 21st July with the aim of working towards releasing v1 of
        the GraphQL-over-HTTP specification with the next release of the GraphQL
        specification (which might be in October, judging by the last release).
      </B>
      <J>That's a pretty tight deadline! Good luck!</J>
      <Timestamp>[6:47] Update on defer/stream</Timestamp>
      <J>
        Due to running short on time, a quick agenda modification meant that Rob
        was up next with updates from the defer and stream RFC. Recent work has
        focussed around batching of payloads to help avoid the client thrashing
        issues of delivering many small payloads in quick succession to a
        client. A general consensus has been reached on this topic, the
        introduction of the "incremental" field into the response payload, but
        the specifics around this are still being worked out.
      </J>
      <B>
        There was a long discussion around whether this change meant that we
        should change the &quot;SHOULD&quot; to a &quot;MUST&quot; when it comes
        to requiring the server to honour stream/defer directives in the
        request. Team MUST suggested many potential shapes for the response was
        undesirable, requiring the client to do more work. Team SHOULD felt the
        server understands the data better and should be able to determine
        whether to inline the data or return it via incremental patches. Another
        comment suggested an edge cache would forward the streamed response the
        first time, but then immediately return the resolved data object in
        later requests for both client and server efficiency. General consensus
        seems to be that we should keep it as a SHOULD for now, but it&apos;s
        not the 100% consensus that the group generally seeks.
      </B>
      <J>
        Finally Rob asked for contributions to{" "}
        <a
          href="https://github.com/robrichard/defer-stream-wg/discussions/42"
          target="_new"
        >
          discussion #42
        </a>{" "}
        on the defer-stream-wg repo, discussing the (rather bike-sheddy) topic
        of whether they should rename &quot;data&quot; to &quot;items&quot; when
        it comes to stream, since it returns a list rather than an object.
      </J>
      <Timestamp>[8:18] Outstanding items</Timestamp>
      <B>
        Unfortunately we did not have time to cover the remaining topics which
        were Roman with an update on the changes he&apos;d like to see in the
        structure of the GraphQL specification, and my proposal for a{" "}
        <a href="https://github.com/graphql/graphql-wg/pull/1035" target="_new">
          &quot;Structured, Type-safe, Returnable and Union Capable Type&quot;
        </a>{" "}
        (i.e. the &quot;struct&quot; type&mdash;a composite type suitable for
        use on both input and output and capable of polymorphism) and how this
        might weigh in to the metadata discussions. We&apos;ll open some{" "}
        <a
          href="https://github.com/graphql/graphql-wg/issues/1058"
          target="_new"
        >
          async discussions
        </a>{" "}
        on these topics and hopefully will have time to discuss them at the next
        meeting.
      </B>
      <J>
        As a final side note, asynchronous discussions over increasing the
        duration or cadence of GraphQL Spec WG meetings are still ongoing so
        that they can avoid having to skip topics like this in future&mdash;get
        involved on graphql-wg{" "}
        <a
          href="https://github.com/graphql/graphql-wg/discussions/1051"
          target="_new"
        >
          discussion thread 1051
        </a>
        !
      </J>
      <B>
        Phew! That was a packed meeting! That&apos;s all from us at Spec News
        and we bid you a fond farewell.
      </B>
      <J>Ciao for now!</J>
    </Transcript>
  ),
};
