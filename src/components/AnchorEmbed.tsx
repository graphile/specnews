import * as React from "react";

export const AnchorEmbed: React.FC<{ src: string }> = ({ src }) => {
  return (
    <iframe
      src={src}
      height="102px"
      width="400px"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
};
