import React, { FC, PropsWithChildren } from "react";
import { SignupFormLight } from "./SignupForm";

export const Transcript: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <div className="transcript">{children}</div>
    <hr />
    <SignupFormLight />
    <a className="back" href="/">
      &laquo; Back to episodes
    </a>
  </div>
);

export const Avatar: FC<{ url: string; alt: string }> = ({ url, alt }) => (
  <img className="transcriptSpeakerAvatar" src={url} alt={alt} />
);

export const Speech: FC<
  PropsWithChildren<{ name: string; avatarUrl: string }>
> = ({ name, avatarUrl, children }) => (
  <div className="transcriptEntry">
    <div className="transcriptSpeaker">
      <Avatar url={avatarUrl} alt={name} />
      <div className="transcriptSpeakerName">{name}</div>
    </div>
    <div className="transcriptText">{children}</div>
  </div>
);

export const B: FC<PropsWithChildren> = ({ children }) => (
  <Speech name="Benjie" avatarUrl="/avatar/benjie.png">
    {children}
  </Speech>
);

export const J: FC<PropsWithChildren> = ({ children }) => (
  <Speech name="Jem" avatarUrl="/avatar/jem.jpg">
    {children}
  </Speech>
);

export const Timestamp: FC<PropsWithChildren> = ({ children }) => (
  <div className="transcriptEntry">
    <h4 className="timestamp">{children}</h4>
  </div>
);
