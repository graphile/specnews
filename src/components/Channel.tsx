import * as React from "react";

export const Channel: React.FC<{
  logo: string;
  url: string;
  name: string;
  title: string;
}> = ({ logo, url, name, title }) => {
  return (
    <div className="channel">
      <a href={url} title={title}>
        <img src={logo} alt={`${name} logo`} width="20" height="20" /> {name}
      </a>
    </div>
  );
};
