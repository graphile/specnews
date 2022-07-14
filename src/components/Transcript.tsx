import React, { FC, PropsWithChildren } from "react";

export const Transcript: FC<PropsWithChildren> = ({ children }) => (
  <div>{children}</div>
);

export const Avatar: FC<{ url: string; alt: string }> = ({ url, alt }) => (
  <img width="20" height="20" src={url} alt={alt} />
);

export const Speech: FC<
  PropsWithChildren<{ name: string; avatarUrl: string }>
> = ({ name, avatarUrl, children }) => (
  <div>
    <div>
      <Avatar url={avatarUrl} alt={name} />
      {name}
    </div>
    <div>{children}</div>
  </div>
);

export const B: FC<PropsWithChildren> = ({ children }) => (
  <Speech name="Benjie" avatarUrl="https://github.com/benjie.png">
    {children}
  </Speech>
);

export const J: FC<PropsWithChildren> = ({ children }) => (
  <Speech name="Jem" avatarUrl="https://github.com/jemgillam.png">
    {children}
  </Speech>
);
