import {Box as UnStyledBox, Flex as UnStyledFlex} from 'grid-styled';
import styled from 'styled-components';

export const Flex = styled(UnStyledFlex)`
  max-width: 1200px;
`;

Flex.defaultProps = {
  mx: 'auto'
};

export const FullColumn = styled(UnStyledBox)``;

FullColumn.defaultProps = {
  width: 1
};

export const HalfColumn = styled(UnStyledBox)``;

HalfColumn.defaultProps = {
  mx: 3,
  width: 1 / 2
};

export const OneThirdColumn = styled(UnStyledBox)``;

OneThirdColumn.defaultProps = {
  mx: 3,
  width: 1 / 3
};

export const TwoThirdColumn = styled(UnStyledBox)``;

TwoThirdColumn.defaultProps = {
  mx: 3,
  width: 2 / 3
};

export const Button = styled.button`
  padding: 5px 7px;
  background: lightgrey;
  border-radius: 3px;
  border: none;
  font-weight: 500;
  color: white;
  cursor: pointer;

  p,
  a {
    text-decoration: none;
    color: white;
  }
`;

export const Card = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  background: white;
  margin: 16px 0;
  padding: 16px;
`;

export const Content = styled.div`
  display: block;
  position: relative;
  width: auto;
  padding: 20px;
`;
