import React from "react";
import {
  TITLE,
  SUBHEADING,
  HEADING,
  CAPTION,
  BODY1,
  BODY2,
} from "./TextBlock.styles";

function TextBlock(props) {
  const { level, children } = props;

  if (level === "body1") {
    return <BODY1>{children}</BODY1>;
  } else if (level === "body2") {
    return <BODY2>{children}</BODY2>;
  } else if (level === "caption") {
    return <CAPTION>{children}</CAPTION>;
  } else if (level === "heading") {
    return <HEADING>{children}</HEADING>;
  } else if (level === "subheading") {
    return <SUBHEADING>{children}</SUBHEADING>;
  } else if (level === "title") {
    return <TITLE>{children}</TITLE>;
  }
  return <BODY1>{children}</BODY1>;
}

export default TextBlock;
