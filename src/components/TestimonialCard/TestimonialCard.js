import React from "react";
import {
  TestimonalCardStyle,
  CardContent,
  Title,
  Description,
  CardUser,
  CardPic,
  CardUserInfo,
  Name,
  Designation,
} from "./TestimonialCard.styles";

const TestimonialCard = (props) => {
  const { className } = props;
  return (
    <TestimonalCardStyle className={className}>
      <CardContent>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </CardContent>
      <CardUser>
        <CardPic>
          <img src={props.src} alt={props.alt} />
        </CardPic>
        <CardUserInfo>
          <Name>{props.name}</Name>
          <Designation>{props.designation}</Designation>
        </CardUserInfo>
      </CardUser>
    </TestimonalCardStyle>
  );
};

export default TestimonialCard;
