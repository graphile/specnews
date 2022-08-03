import React, { FC } from "react";
import { Helmet } from "react-helmet";

export const Meta: FC<{
  title?: string;
  url?: string;
  description?: string;
}> = ({ title, url, description }) => (
  <Helmet
    title={
      title ??
      "SpecNews: a podcast delivering the latest highlights from the GraphQL Working Group"
    }
    defer={false}
  >
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url ?? "https://specnewspod.com/"} />
    <meta
      property="og:title"
      content={title ?? "SpecNews: GraphQL WG Digests"}
    />
    <meta
      property="og:description"
      content={
        description ??
        "The latest GraphQL Working Group highlights straight to your ears; stay up to date in just a few minutes every month!"
      }
    />
    <meta
      property="og:image"
      content="https://specnewspod.com/logo/SpecNews.png"
    />
    <link
      type="application/rss+xml"
      rel="alternate"
      title="SpecNews: GraphQL digests"
      href="https://anchor.fm/s/9c882588/podcast/rss"
    />
  </Helmet>
);
