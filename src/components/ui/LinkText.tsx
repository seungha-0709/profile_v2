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
  const handleLink = () => {
    if (props.linkTo) {
      window.open(props.linkTo);
      return;
    }
    props.onClickAction && props.onClickAction();
  };

  return (
    <>
      <span onClick={handleLink} className={typo_link}>
        {props.children}
      </span>
      <IconLinkComponent />
    </>
  );
};

export default LinkText;
