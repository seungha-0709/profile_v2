import React, { lazy, PropsWithChildren } from "react";
import { typo_link } from "../../styles/styles.css";

const IconLinkComponent = lazy(() => import("../icons/IconLink"));

const LinkText = (props: PropsWithChildren) => {
  return (
    <span className={typo_link}>
      {props.children + " "}
      <IconLinkComponent />
    </span>
  );
};

export default LinkText;
