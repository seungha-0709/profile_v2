import React from "react";
import { vars, iconMarginRight } from "../../styles/styles.css";

const IconGithub = ({ color }: { color?: string }) => {
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
          x1="94.4706"
          y1="189.235"
          x2="94.4706"
          y2="116.176"
          stroke={color || vars.color.COLOR_02}
          strokeWidth="24"
          strokeLinecap="round"
        />
        <circle
          cx="95.8824"
          cy="83.8824"
          r="18.8824"
          stroke={color || vars.color.COLOR_02}
          strokeWidth="24"
        />
        <circle
          cx="95.8824"
          cy="217.118"
          r="18.8824"
          stroke={color || vars.color.COLOR_02}
          strokeWidth="24"
        />
        <circle
          cx="203.529"
          cy="112.118"
          r="18.8824"
          stroke={color || vars.color.COLOR_02}
          strokeWidth="24"
        />
        <path
          d="M95.8823 170.115L126.36 170.115C142.944 170.115 158.788 163.251 170.131 151.153L188.529 131.529"
          stroke={color || vars.color.COLOR_02}
          strokeWidth="24"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
export default IconGithub;
