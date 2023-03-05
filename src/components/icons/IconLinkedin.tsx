import React from "react";
import { vars, iconMarginRight } from "../../styles/styles.css";

const IconLinkedin = ({ color }: { color?: string }) => {
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
          x1="80"
          y1="131"
          x2="80"
          y2="228"
          stroke={color || vars.color.COLOR_02}
          strokeWidth="36"
          strokeLinecap="round"
        />
        <line
          x1="141"
          y1="113"
          x2="141"
          y2="228"
          stroke={color || vars.color.COLOR_02}
          strokeWidth="36"
          strokeLinecap="round"
        />
        <circle
          cx="80.5"
          cy="79.5"
          r="22.5"
          fill={color || vars.color.COLOR_02}
        />
        <path
          d="M227 229L227 155.395C227 102.184 149.595 95.891 141 148.403V148.403"
          stroke={color || vars.color.COLOR_02}
          strokeWidth="36"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default IconLinkedin;
