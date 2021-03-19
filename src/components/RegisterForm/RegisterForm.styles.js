import styled from "styled-components";
import {
  rem,
  groldLight,
  grey,
  primary,
  red,
  font,
  SiteTransition,
  secondary,
  dwhite,
  xdgrey,
  groldRegular,
  white,
  groldMedium,
  dblack,
  groldSLight,
  md,
  sm,
  xs,
} from "../../config/variables";
import { images } from "../../config/images";

export const Form = styled.form`
  width: 100%;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: ${rem(6)};
    left: ${rem(6)};
    width: 100%;
    height: 100%;
    border-radius: ${rem(20)};
    border: ${rem(3)} solid ${secondary};
    z-index: 0;
    transition: ${SiteTransition};
    ${xs(`
      border-width: ${rem(2)};
      top: ${rem(4)};
      left: ${rem(4)};
      border-radius: ${rem(10)};
    `)}
  }
`;

export const FormWrap = styled.div`
  background-color: ${white};
  border-radius: ${rem(20)};
  padding: ${rem(35)} ${rem(30)};
  position: relative;
  z-index: 1;
  ${md(`
    padding: ${rem(22)} ${rem(25)};
  `)}
  ${xs(`
    padding: ${rem(19)} ${rem(15)};
    border-radius: ${rem(10)};
  `)}
`;

export const BlockHeading = styled.h3`
  ${font(rem(22), rem(30), primary, groldMedium)};
  margin-bottom: ${rem(9)};
  padding-left: ${rem(28)};
  position: relative;
  ${md(`
    font-size: ${rem(20)};
    line-height: ${rem(27)};
  `)}
  &:before {
    content: "";
    width: ${rem(18)};
    height: ${rem(20)};
    background: url(${images.SliderDots}) no-repeat;
    left: 0;
    top: ${rem(3)};
    position: absolute;
    background-size: ${rem(18)};
  }
`;

export const InputFieldRow = styled.div`
  position: relative;
  margin: 0 ${rem(-10)};
  margin-bottom: ${rem(9)};
  display: flex;
  ${sm(`
    margin: 0 ${rem(-5)};
    margin-bottom: ${rem(9)};
  `)}
  ${xs(`
    margin: 0;
    flex-wrap: wrap;
  `)}
`;

export const InputFieldCol = styled.div`
  width: calc(100% - ${rem(20)});
  margin: 0 ${rem(10)};
  ${sm(`
    width: calc(100% - ${rem(10)}); 
    margin: 0 ${rem(5)};
  `)}
  ${xs(`
    width: 100%; 
    margin: 0;
    margin-bottom: ${rem(9)};
  `)}
  &.col-2 {
    width: calc(50% - ${rem(20)});
    ${sm(`
      width: calc(50% - ${rem(10)}); 
    `)}
    ${xs(`
      width: 100%; 
    `)}
  }
  &.col-3 {
    width: calc(33.33% - ${rem(20)});
    ${sm(`
      width: calc(33.33% - ${rem(10)}); 
    `)}
    ${xs(`
      width: 100%; 
    `)}
  }
`;

export const Label = styled.label`
  ${font(rem(16), rem(21), xdgrey, groldRegular)};
  margin-bottom: ${rem(5)};
  display: block;
  ${md(`
    font-size: ${rem(14)};
    line-height: ${rem(19)};
  `)}
`;

export const Input = styled.input`
  border: ${rem(2)} solid ${dwhite};
  ${font(rem(16), rem(21), grey, groldLight)}
  padding: ${rem(10)} ${rem(15)};
  border-radius: ${rem(8)};
  width: 100%;
  transition: ${SiteTransition};
  ${md(`
    padding: ${rem(8)} ${rem(15)};
    line-height: ${rem(20)};
  `)}
  &:focus {
    border-color: ${secondary};
  }
`;

export const TextArea = styled.textarea`
  border: ${rem(2)} solid ${dwhite};
  ${font(rem(16), rem(21), grey, groldLight)}
  padding: ${rem(10)} ${rem(15)};
  border-radius: ${rem(8)};
  width: 100%;
  transition: ${SiteTransition};
  height: ${rem(100)};
  ${md(`
    padding: ${rem(8)} ${rem(15)};
    line-height: ${rem(20)};
    font-size: ${rem(14)};
  `)}
  &:focus {
    border-color: ${secondary};
  }
`;

export const FileWrap = styled.div`
  position: relative;
  border: ${rem(2)} solid ${dwhite};
  ${font(rem(16), rem(21), grey, groldLight)}
  padding: ${rem(5)};
  border-radius: ${rem(8)};
  width: 100%;
  transition: ${SiteTransition};
  display: flex;
  justify-content: flex-end;
  ${md(`
    padding: ${rem(4)};
  `)}
`;

export const FileName = styled.div`
  ${font(rem(16), rem(21), dblack, groldSLight)};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${rem(12)};
  z-index: 9;
`;

export const FileLabel = styled.label`
  display: inline-block;
  padding: ${rem(7)} ${rem(15)};
  cursor: pointer;
  border-radius: ${rem(6)};
  background-color: ${secondary};
  ${font(rem(16), rem(21), dblack, groldMedium)};
  ${md(`
    padding: ${rem(4)} ${rem(10)};
    font-size: ${rem(14)};
    line-height: ${rem(20)};
  `)}
`;

export const FileInput = styled.input`
  height: 100%;
  left: 0;
  opacity: 0;
  outline: 0;
  position: absolute;
  top: 0;
  width: 100%;
  cursor: pointer;
`;

export const Select = styled.select`
  border: ${rem(2)} solid ${dwhite};
  ${font(rem(16), rem(21), grey, groldLight)}
  padding: ${rem(10)} ${rem(15)};
  border-radius: ${rem(8)};
  width: 100%;
  transition: ${SiteTransition};
  background: url(${images.DownArrow}) 95% center no-repeat;
  -webkit-appearance: none;
  padding-right: ${rem(30)};
  ${md(`
    padding: ${rem(8)} ${rem(15)};
    line-height: ${rem(20)};
    font-size: ${rem(14)};
    padding-right: ${rem(30)};
  `)}
  &:focus {
    border-color: ${secondary};
  }
`;

export const ErrorMessage = styled.div`
  ${font(rem(14), rem(15), red, groldLight)};
  padding-top: ${rem(5)};
  ${md(`
    line-height: ${rem(13)};
    font-size: ${rem(12)};
  `)}
`;

export const RegisterFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  position: relative;
  text-decoration: none;
  font-family: "grold_roundedmedium";
  cursor: pointer;
  display: inline-block;
  border: 0;
  background: transparent;
  span {
    background: ${secondary};
    display: block;
    border-radius: ${rem(5)};
    padding: ${rem(8)} ${rem(20)} ${rem(8)} ${rem(38)};
    position: relative;
    z-index: 1;
    font-size: ${rem(16)};
    line-height: ${rem(24)};
    color: ${dblack};
    transition: ${SiteTransition};
    text-transform: uppercase;
    ${md(`
      font-size: ${rem(13)};
      line-height: ${rem(16)};
      padding: ${rem(8)} ${rem(10)} ${rem(8)} ${rem(30)};
    `)}
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: ${rem(15)};
      background: url(${images.IconBtn}) center center no-repeat;
      width: ${rem(16)};
      height: ${rem(15)};
      ${md(`
        width: ${rem(13)};
        height: ${rem(14)};
        background-size: ${rem(13)};
        left: ${rem(12)};
    `)}
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: ${rem(4)};
    left: ${rem(4)};
    width: 100%;
    height: 100%;
    border-radius: ${rem(5)};
    border: ${rem(2)} solid ${primary};
    z-index: 0;
    transition: ${SiteTransition};
  }
  &:hover {
    text-decoration: none;
    span {
      background: ${primary};
    }
    &:after {
      top: ${rem(-4)};
      left: ${rem(-4)};
      border-color: ${secondary};
    }
  }
`;

export const BlockGroup = styled.div`
  margin-bottom: ${rem(29)};
`;
