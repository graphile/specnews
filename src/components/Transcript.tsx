import React, { FC, PropsWithChildren } from "react";
import { SignupFormLight } from "./SignupForm";

interface X {
  x?: boolean;
}

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
  PropsWithChildren<{ name: string; avatarUrl: string } & X>
> = ({ name, avatarUrl, children, x }) => {
  if (x && false) {
    return (
      <div className="transcriptEntryShort">
        <div className="avatarShort">
          <Avatar url={avatarUrl} alt={name} />
        </div>
        <div className="bodyShort">
          <span className="transcriptSpeakerNameShort">{name}</span> {children}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`transcriptEntry ${x ? "short" : ""}`}>
        <div className="transcriptSpeaker">
          <Avatar url={avatarUrl} alt={name} />
          <div className="transcriptSpeakerName">{name}</div>
        </div>
        <div className="transcriptText">{children}</div>
      </div>
    );
  }
};

export const B: FC<PropsWithChildren<X>> = ({ children, x }) => (
  <Speech x={x} name="Benjie" avatarUrl="/avatar/benjie.png">
    {children}
  </Speech>
);

export const J: FC<PropsWithChildren<X>> = ({ children, x }) => (
  <Speech x={x} name="Jem" avatarUrl="/avatar/jem.jpg">
    {children}
  </Speech>
);

export const Timestamp: FC<PropsWithChildren> = ({ children }) => (
  <div className="transcriptEntry">
    <h4 className="timestamp">{children}</h4>
  </div>
);
export const Code: FC<PropsWithChildren> = ({ children }) => (
  <span className="code">{children}</span>
);
