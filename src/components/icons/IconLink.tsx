import React from "react";

const IconLink = ({ color }: { color?: string }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.5C0 0.223858 0.223858 0 0.5 0H5.5C5.77614 0 6 0.223858 6 0.500001L6 5.5C6 5.77614 5.77614 6 5.5 6C5.22386 6 5 5.77614 5 5.5L5 1.99997L1.23222 5.76775C1.03695 5.96302 0.720371 5.96302 0.525109 5.76775C0.329847 5.57249 0.329847 5.25591 0.525109 5.06065L4.58576 1L0.5 1C0.223858 1 0 0.776142 0 0.5Z"
        fill={color || "#0D0E0F"}
      />
    </svg>
  );
};

export default IconLink;
