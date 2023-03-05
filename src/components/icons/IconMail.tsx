import React from "react";
import { vars, iconMarginRight } from "../../styles/styles.css";

const IconMail = ({ color }: { color?: string }) => {
  return (
    <svg
      className={iconMarginRight}
      width="16"
      height="16"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect
          x="12"
          y="12"
          width="276"
          height="276"
          rx="48"
          stroke={color || vars.color.COLOR_02}
          strokeWidth="24"
        />
        <line
          x1="63.7616"
          y1="126.101"
          x2="149.517"
          y2="188.406"
          stroke={color || vars.color.COLOR_02}
          strokeWidth="24"
          strokeLinecap="round"
        />
        <line
          x1="150.791"
          y1="188.657"
          x2="236.547"
          y2="126.352"
          stroke={color || vars.color.COLOR_02}
          strokeWidth="24"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_7_20"></clipPath>
      </defs>
    </svg>
  );
};

export default IconMail;
