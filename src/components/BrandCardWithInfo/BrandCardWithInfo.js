import React from "react";
import {
  BrandCard,
  ImgWrap,
  Img,
  CardTitle,
  Name,
  Count,
} from "./BrandCardWithInfo.styles";

const BrandCardWithInfo = (props) => {
  const { className } = props;
  return (
    <BrandCard className={className} onClick={props.handleSelect}>
      <ImgWrap>
        <Img src={props.src} alt={props.alt} />
      </ImgWrap>
      <CardTitle>
        <Name>{props.name}</Name>
        <Count>{props.count}</Count>
      </CardTitle>
    </BrandCard>
  );
};

export default BrandCardWithInfo;
