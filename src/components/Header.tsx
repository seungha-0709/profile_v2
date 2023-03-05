import React, { lazy, useState } from "react";
import {
  headerStyle,
  profileImg,
  header_H1,
  typo_link,
} from "../styles/styles.css";

const LinkComponent = lazy(() => import("./ui/LinkText"));
const TooltipComponent = lazy(() => import("./ui/Tooltip"));

const Header = () => {
  const [isShowTooltip, setIsShowTooltip] = useState<boolean>(false);

  return (
    <>
      <header className={headerStyle}>
        <div className={profileImg}></div>
        <div>
          <h1 className={header_H1}>
            김 승 하
            <br />A Web Frontend Engineer
          </h1>
          <p>
            안녕하세요. 현재 닥터나우에서 웹/모바일 화면 개발을 담당하고 있는
            김승하입니다.
            <br />
            2020년 7월경 독학으로 개발 공부를 시작해 그 해 12월에 개발자로
            취업하여, <br />
            현재는 약 만 2년 2개월 정도의 경력을 가지고 있습니다.
          </p>
          <div>
            <LinkComponent
              onClickAction={() => {
                setIsShowTooltip(true);
              }}
            >
              Contact me
            </LinkComponent>
          </div>
        </div>
      </header>
      {isShowTooltip && (
        <TooltipComponent
          isShowTooltip={isShowTooltip}
          onClose={() => setIsShowTooltip(false)}
        />
      )}
    </>
  );
};

export default Header;
