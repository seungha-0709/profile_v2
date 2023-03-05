import React from "react";
import {
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
          <div key={item.id}>
            <div className={flexSpaceBetween}>
              <h3 className={typo_h3}>{item.position}</h3>
              <span>{item.period}</span>
            </div>
            {item.list.map((work) => {
              return (
                <ul key={work.id}>
                  <li className={list_li}>{work.title}</li>
                  <ul>
                    {work.item.map((workItem, index) => {
                      return (
                        <li key={index} className={nested_list_li}>
                          {workItem}
                        </li>
                      );
                    })}
                  </ul>
                </ul>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Works;
