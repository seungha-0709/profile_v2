import React, { lazy, useState } from "react";
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
const MailModal = lazy(() => import("../ui/MailModal"));
const IconMail = lazy(() => import("../icons/IconMail"));
const IconGithub = lazy(() => import("../icons/IconGithub"));
const IconLinkedin = lazy(() => import("../icons/IconLinkedin"));

const Tooltip = (props: TooltipPropsType) => {
  const [isShowMailModal, setIsShowMailModal] = useState<boolean>(false);
  const { onClose } = props;

  return (
    <>
      <div onClick={onClose} className={tooltipBackdrop}></div>
      <div className={tooltipContainer}>
        <div className={flexTextAlignCenter}>
          <IconMail />
          <LinkText onClickAction={() => setIsShowMailModal(true)}>
            seunghakim.x+cv@gmail.com
          </LinkText>
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
      {isShowMailModal && (
        <MailModal onClose={() => setIsShowMailModal(false)} />
      )}
    </>
  );
};

export default Tooltip;
