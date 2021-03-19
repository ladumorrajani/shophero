import React from "react";
import {
  CotactCardStyle,
  CotactCardWrap,
  Icon,
  H3,
  P,
} from "./ContactInfoCard.styles";

const ContactInfoCard = (props) => {
  const { className } = props;
  return (
    <CotactCardStyle className={className}>
      <CotactCardWrap>
        <Icon>
          <img src={props.src} alt={props.alt} />
        </Icon>
        {props.email && <H3 href={`mailto:${props.email}`}>{props.email}</H3>}
        {props.phone && <H3 href={`tel:${props.phone}`}>{props.phone}</H3>}
        <P>{props.content}</P>
      </CotactCardWrap>
    </CotactCardStyle>
  );
};

export default ContactInfoCard;
