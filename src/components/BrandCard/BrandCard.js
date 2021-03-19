import React from "react";
import { Card, Img } from "./BrandCard.styles";

const BrandCard = (props) => {
  const { className } = props;
  return (
    <Card className={className}>
      <Img src={props.src} alt={props.alt} />
    </Card>
  );
};

export default BrandCard;
