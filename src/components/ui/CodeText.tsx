import { PropsWithChildren } from "react";
import { typo_code } from "../../styles/styles.css";

const CodeText = (props: PropsWithChildren) => {
  return <span className={typo_code}>{props.children}</span>;
};

export default CodeText;
