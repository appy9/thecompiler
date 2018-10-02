import styled, {css} from 'styled-components';

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
  border-radius: 2px;
  border: 1px solid ${p => p.theme.Grey};
`;

export const Column = styled.div`
  display: inline-block;
  vertical-align: top;
`;

export const ColumnLeft = styled(Column)`
  width: calc(33% - 15px);
  margin-right: 15px;
`;
export const ColumnRight = styled(Column)`
  width: 67%;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const Content = styled.div`
  display: block;
  position: relative;
  width: auto;
  padding: 20px;
`;

export const Spacing = styled.div`
  margin: 10px 0;
`;

export const globalCSS = css`
  * {
    vertical-align: baseline;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
  }

  *:focus {
    outline: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.25;
    word-wrap: break-word;
    font-kerning: normal;
    background: ${p => p.theme.background};
  }
`;

export const theme = {
  background: '#F4F5F7',
  BlueHover: '#6EC6FF',
  Blue: '#2196F3',
  GreenHover: '#59E87C',
  Green: '#00B54E',
  Grey: '#C1C2C4',
  GreyDark: '#919294',
  RedHover: '#FF5231',
  Red: '#DC0000'
};
