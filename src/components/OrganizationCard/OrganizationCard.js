import React from "react";
import {
  OrganizatioCard,
  ImgWrap,
  Img,
  CardTitle,
  CardTitleWrap,
  Name,
  Count,
  CardInfo,
  DialogStyle,
  DialogHeading,
  Logo,
  AmountInfo,
  AmountCount,
  AmountNote,
  DialogContent,
  Heading,
  Content,
  DialogFooter,
} from "./OrganizationCard.styles";
import Button from "../Button/Button";
import IconTick from "../../assets/Icons/IconTick";

const OrganizatioCardWithInfo = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { className } = props;
  return (
    <OrganizatioCard className={className} onClick={props.handleSelect}>
      <ImgWrap>
        <Img src={props.src} alt={props.alt} />
      </ImgWrap>
      <CardTitle>
        <CardTitleWrap>
          <Name>{props.name}</Name>
          <Count>{props.count}</Count>
        </CardTitleWrap>
        <CardInfo onClick={handleClickOpen}>
          <IconTick />
        </CardInfo>
        <DialogStyle open={open} onClose={handleClose}>
          <DialogHeading>
            <Logo>
              <img src={props.src} alt={props.alt} />
            </Logo>
            <AmountInfo>
              <AmountCount>{props.count}</AmountCount>
              <AmountNote>Amount Collected</AmountNote>
            </AmountInfo>
          </DialogHeading>
          <DialogContent>
            <Heading>{props.name}</Heading>
            <Content>{props.content}</Content>
          </DialogContent>
          <DialogFooter>
            <Button onClick={handleClose}>Close</Button>
          </DialogFooter>
        </DialogStyle>
      </CardTitle>
    </OrganizatioCard>
  );
};

export default OrganizatioCardWithInfo;
