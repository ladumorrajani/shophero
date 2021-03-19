import React from "react";
import { CardStyle, Icon, H3 } from "./HelpCard.styles";

const HelpCard = (props) => {
  const { className } = props;
  return (
    <CardStyle className={className}>
      <Icon>
        <img src={props.src} alt={props.alt} />
      </Icon>
      <H3>{props.title}</H3>
    </CardStyle>
  );
};

export default HelpCard;
