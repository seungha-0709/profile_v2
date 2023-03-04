import { lazy } from "react";
import {
  typo_h2,
  typo_h3,
  list_ul,
  nested_list_ul,
  flexSpaceBetween,
  asideStyle,
} from "../styles/styles.css";
import CodeText from "./ui/CodeText";

const SKILL_SET = [
  "Javascript",
  "Typescript",
  "React",
  "React Native",
  "NextJS",
  "Graphql(apollo)",
];

const WorkComponent = lazy(() => import("./Works"));

const Main = () => {
  return (
    <main className={flexSpaceBetween}>
      <section style={{ width: "100%" }}>
        <h2 className={typo_h2}>Work Experiences</h2>
        <WorkComponent />
      </section>
      <aside className={asideStyle}>
        <div>
          <h2 className={typo_h2}>Tech Skill</h2>
          {SKILL_SET.map((skill: string) => {
            return <CodeText key={skill}>{skill}</CodeText>;
          })}
        </div>
        <div>
          <h2 className={typo_h2}>Education</h2>
          <p>
            이화여자대학교
            <br />
            (교육학 학사, 경영학 부전공)
            <br />
            GPA: 4.13 / 4.5
            <br />
            2009. 3. ~ 2014. 2.
            <br />
          </p>
          <p>
            상산고등학교 (인문계열)
            <br />
            2006. 3. ~ 2009. 2.
            <br />
          </p>
        </div>
      </aside>
    </main>
  );
};

export default Main;
