import React from "react";
import { StepperStyle } from "./StepperTab.styles.js";

const StepperTab = (props) => {
  const {
    tabs = tabs || [],
    activeTab,
    setTab,
    isEdit = false,
    editTabArr = [],
    components = components || [],
  } = props;
  return (
    <StepperStyle>
      <div className="Stepper-tabs">
        {props.tabs.map((tab, index) => {
          return (
            <div
              className={`Stepper-tabs-single ${
                (activeTab === index + 1 && "active") ||
                (editTabArr.includes(index + 1) && "fill")
              }`}
              key={index}
              onClick={() => {
                editTabArr.includes(index + 1) && setTab(index + 1);
              }}
            >
              <div className="count">{tab.id}</div>
              <div className="content-blk">
                <h6>{tab.title}</h6>
                <p>{tab.subtitle}</p>
              </div>
              {activeTab !== index + 1}
            </div>
          );
        })}
      </div>
      <div className="Stepper-content">
        {components.map((Component, index) => {
          return (
            <div
              key={index}
              className={`Stepper-content-single ${
                activeTab === index + 1 ? "active" : ""
              }`}
            >
              {Component}
            </div>
          );
        })}
      </div>
    </StepperStyle>
  );
};

export default StepperTab;
