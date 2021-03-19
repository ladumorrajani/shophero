import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import StepperTab from "../StepperTab/StepperTab";
import StepOne from "../StepOne/StepOne";
import StepTwo from "../StepTwo/StepTwo";
import {
  StartProgress,
  StepperHeader,
  Logo,
  IconClose,
} from "./StartProgressDialog.styles";
import { images } from "../../config/images";
import StepThree from "../StepThree/StepThree";
import "../../i18n";
import { useTranslation } from "react-i18next";

const StartProgressDialog = (props) => {
  const { t } = useTranslation();
  let [activeTab, setTab] = useState(1);
  let [editTabArr, setEditTabArr] = useState([1]);

  // handle Next Clicked
  const handleNextClicked = () => {
    if (!editTabArr.includes(activeTab)) {
      setEditTabArr([...editTabArr, activeTab]);
    }
    setTab(activeTab + 1);
  };

  return (
    <Dialog fullScreen open={props.open} onClose={props.handleClose}>
      <StartProgress>
        <div className="container">
          <StepperHeader>
            <Logo>
              <img src={images.logo} alt="logo" />
            </Logo>
            <IconClose onClick={props.handleClose} />
          </StepperHeader>
          <StepperTab
            tabs={t("home.stepper_data.tab_data", { returnObjects: true })}
            activeTab={activeTab}
            setTab={setTab}
            editTabArr={editTabArr}
            components={[
              <StepOne
                {...props.StepOneData}
                key={0}
                handleNextClicked={handleNextClicked}
              />,
              <StepTwo
                {...props.StepTwoData}
                key={1}
                handleNextClicked={handleNextClicked}
              />,
              <StepThree
                {...props.StepThreeData}
                key={2}
                handleNextClicked={handleNextClicked}
              />,
            ]}
          />
        </div>
      </StartProgress>
    </Dialog>
  );
};

export default StartProgressDialog;
