import React, { lazy } from "react";
import {
  flexTextAlignCenter,
  tooltipBackdrop,
  tooltipContainer,
  iconMarginRight,
} from "../../styles/styles.css";

type TooltipPropsType = {
  isShowTooltip: boolean;
  onClose: () => void;
};

const LinkText = lazy(() => import("../ui/LinkText"));
const IconMail = lazy(() => import("../icons/IconMail"));
const IconGithub = lazy(() => import("../icons/IconGithub"));
const IconLinkedin = lazy(() => import("../icons/IconLinkedin"));

const Tooltip = (props: TooltipPropsType) => {
  const { onClose } = props;
  return (
    <div onClick={onClose} className={tooltipBackdrop}>
      <div className={tooltipContainer}>
        <div className={flexTextAlignCenter}>
          <IconMail />
          <LinkText>seunghakim.x+cv@gmail.com</LinkText>
        </div>
        <div className={flexTextAlignCenter}>
          <IconGithub />
          <LinkText linkTo="https://github.com/seungha-0709">
            https://github.com/seungha-0709
          </LinkText>
        </div>
        <div className={flexTextAlignCenter}>
          <IconLinkedin />
          <LinkText linkTo="https://linkedin.com/in/seunghakim-x">
            https://linkedin.com/in/seunghakim-x
          </LinkText>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
