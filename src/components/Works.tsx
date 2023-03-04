import React from "react";
import {
  typo_h2,
  typo_h3,
  list_li,
  nested_list_li,
  flexSpaceBetween,
} from "../styles/styles.css";
import { EXPERIENCES } from "../data/experiences";

const Works = () => {
  return (
    <>
      {EXPERIENCES.map((item) => {
        return (
          <>
            <div className={flexSpaceBetween}>
              <h3 className={typo_h3}>{item.position}</h3>
              <span>{item.period}</span>
            </div>
            {item.list.map((work) => {
              return (
                <ul>
                  <li className={list_li}>{work.title}</li>
                  <ul>
                    {work.item.map((workItem) => {
                      return <li className={nested_list_li}>{workItem}</li>;
                    })}
                  </ul>
                </ul>
              );
            })}
          </>
        );
      })}
    </>
  );
};

export default Works;
