import React from "react";
import { CardStyle, Icon, H3, P } from "./HowItWorkCard.styles";

const HowItWorkCard = (props) => {
  const { className } = props;
  return (
    <CardStyle className={className}>
      <Icon>
        <img src={props.src} alt={props.alt} />
      </Icon>
      <H3>{props.title}</H3>
      <P>{props.content}</P>
    </CardStyle>
  );
};

export default HowItWorkCard;
