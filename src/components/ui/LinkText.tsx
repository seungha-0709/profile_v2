import React, { lazy, PropsWithChildren } from "react";
import { typo_link } from "../../styles/styles.css";

const IconLinkComponent = lazy(() => import("../icons/IconLink"));

interface LinkTextProps extends PropsWithChildren {
  // onControl: React.Dispatch<React.SetStateAction<boolean>>;
  // isShowTooltip: boolean;
  onClickAction?: (v?: any) => void;
  linkTo?: string;
}

const LinkText = (props: LinkTextProps) => {
  const handleLink = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.stopPropagation();
    if (props.linkTo) {
      window.open(props.linkTo);
      return;
    }
    console.log("????");
    props.onClickAction && props.onClickAction();
  };

  return (
    <>
      <span onClick={(e) => handleLink(e)} className={typo_link}>
        {props.children}
      </span>
      <IconLinkComponent />
    </>
  );
};

export default LinkText;
