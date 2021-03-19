import styled from "styled-components";
import {
  rem,
  dblack,
  grey,
  primary,
  groldMedium,
  font,
  SiteTransition,
  secondary,
  white,
  groldSLight,
  lg,
  md,
  sm,
} from "../../config/variables";
import { images } from "../../config/images";

export const Form = styled.form`
  display: flex;
  max-width: ${rem(665)};
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${rem(28)};
  ${md(`
    max-width: ${rem(430)}; 
    margin-bottom: ${rem(15)};  
  `)}
  ${sm(`
    max-width: ${rem(350)}; 
    margin-bottom: ${rem(15)};  
    padding: 0 ${rem(15)};
  `)}
`;

export const InputFieldRow = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  border: ${rem(2)} solid ${white};
  padding: ${rem(10)} ${rem(5)} ${rem(13)} ${rem(43)};
  ${font(rem(18), rem(24), grey, groldSLight)};
  border-radius: ${rem(10)};
  width: 100%;
  background: ${white} url(${images.searchIcon}) 10px center no-repeat;
  transition: ${SiteTransition};
  ${lg(`
    padding: ${rem(9)} ${rem(5)} ${rem(10)} ${rem(43)};
    font-size: ${rem(16)};
    line-height: ${rem(24)};    
  `)}
  ${md(`
    padding: ${rem(9)} ${rem(5)} ${rem(8)} ${rem(43)};
    font-size: ${rem(14)};
    line-height: ${rem(18)}
  `)}
  ${sm(`
    padding: ${rem(7)} ${rem(5)} ${rem(7)} ${rem(43)};
    background0size: ${rem(19)};
    border-radius: ${rem(8)};
  `)}
  &:focus {
    border-color: ${primary};
  }
`;

export const Button = styled.button`
  position: absolute;
  border: 0;
  background: ${primary};
  ${font(rem(18), rem(22), dblack, groldMedium)};
  padding: ${rem(9)} ${rem(16)};
  border-radius: ${rem(10)};
  right: ${rem(5)};
  top: ${rem(5)};
  text-transform: uppercase;
  cursor: pointer;
  transition: ${SiteTransition};
  ${lg(`
    padding: ${rem(8)} ${rem(16)};
    font-size: ${rem(16)};
    line-height: ${rem(20)};    
  `)}
  ${md(`
    padding: ${rem(6)} ${rem(16)};
    font-size: ${rem(14)};
    line-height: ${rem(18)};  ;   
    border-radius: ${rem(8)};   
  `)}
  ${md(`
    padding: ${rem(4)} ${rem(12)};
  `)}
  &:hover {
    background-color: ${secondary};
  }
`;
