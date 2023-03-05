import React from "react";
import {
  mobileStyle,
  mobileRootStyle,
  mobileFlexSpaceBetween,
  typo_h2,
  typo_h3,
  mobileProfileImg,
} from "src/styles/mobile.css";
import { EXPERIENCES } from "@data/experiences";

const MobileMain = () => {
  return (
    <div className={mobileRootStyle}>
      <header>
        <div className={mobileProfileImg} />
      </header>
      <section>
        <h2 className={typo_h2}>Work Experience</h2>
        {EXPERIENCES.map((item) => {
          return (
            <div className={mobileStyle} key={item.id}>
              <div className={mobileFlexSpaceBetween}>
                <h3 className={typo_h3}>{item.position}</h3>
                <span>{item.period}</span>
              </div>
              {item.list.map((work) => {
                return (
                  <ul key={work.id}>
                    <li>{work.title}</li>
                    <ul>
                      {work.item.map((workItem, index) => {
                        return <li key={index}>{workItem}</li>;
                      })}
                    </ul>
                  </ul>
                );
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MobileMain;
