import React from "react";
import NewsletterForm from "../NewsletterForm/NewsletterForm";
import {
  StepThreeStyle,
  SubscribeContent,
  SubscribeForm,
  NewsletterFormWrap,
  ListDataWrap,
  ListData,
  ListItem,
  H5,
  P,
  SubscribeFooter,
  SkipStep,
} from "./StepThree.styles";
import Button from "../Button/Button";
import "../../i18n";
import { useTranslation } from "react-i18next";

const StepThree = (props) => {
  const { t } = useTranslation();
  return (
    <StepThreeStyle>
      <SubscribeContent>
        <SubscribeForm>
          <H5>{t("home.stepper_data.step_three.title")}</H5>
          <P>{t("home.stepper_data.step_three.sub_title")}</P>
          <NewsletterFormWrap>
            <NewsletterForm />
          </NewsletterFormWrap>
        </SubscribeForm>
        <ListDataWrap>
          <ListData>
            {t("home.stepper_data.step_three.list_item", {
              returnObjects: true,
            }).map((list, i) => {
              return <ListItem key={i}>{list}</ListItem>;
            })}
          </ListData>
        </ListDataWrap>
      </SubscribeContent>
      <SubscribeFooter>
        <SkipStep>{t("home.stepper_data.step_three.skip_btn")}</SkipStep>
        <Button>{t("home.stepper_data.next_step_btn")}</Button>
      </SubscribeFooter>
    </StepThreeStyle>
  );
};

export default StepThree;
