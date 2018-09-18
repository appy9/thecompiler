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
  ${'' /* border-radius: 2px; */}
  border: 1px solid ${p => p.theme.Grey400};
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

export const Tag = styled.span`
  padding: 5px 7px;
  border-radius: 3px;
  border: none;
  font-weight: 500;
  cursor: pointer;

  color: ${p => p.theme.Blue400};
  background: ${p => p.theme.Blue100};

  &:hover {
    background: ${p => p.theme.Blue200};
  }
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
    line-height: 1.25;
    word-wrap: break-word;
    font-kerning: normal;
    background: ${p => p.theme.background};
  }
`;

// Grey100: '#FCFCFD',
// Grey200: '#F9FAFB',
// Grey300: '#F4F5F7',
// Grey400: '#C1C2C4',
// Grey500: '#919294',

export const theme = {
  // background: '#F9FAFB',
  background: '#F4F5F7',
  Blue100: '#B6E2FF',
  Blue200: '#6EC6FF',
  Blue300: '#2196F3',
  Blue400: '#0069C0',
  Blue500: '#00345F',
  Green100: '#ACF3BD',
  Green200: '#59E87C',
  Green300: '#00B54E',
  Green400: '#008420',
  Green500: '#00410F',
  Grey100: '#FCFCFD',
  Grey200: '#F9FAFB',
  Grey300: '#F4F5F7',
  Grey400: '#C1C2C4',
  Grey500: '#919294',
  Orange100: '#FFE3A3',
  Orange200: '#FFC847',
  Orange300: '#FD9700',
  Orange400: '#C46800',
  Orange500: '#613300',
  Purple100: '#FBD3FF',
  Purple200: '#F7A8FF',
  Purple300: '#C377E0',
  Purple400: '#9148AE',
  Purple500: '#482356',
  Red100: '#FFA898',
  Red200: '#FF5231',
  Red300: '#DC0000',
  Red400: '#A10000',
  Red500: '#6D0000',
  Salmon100: '#FFEEF8',
  Salmon200: '#FFDEF1',
  Salmon300: '#DBACBE',
  Salmon400: '#A97D8E',
  Salmon500: '#543E46',
  Teal100: '#D8FEFB',
  Teal200: '#B2FEF7',
  Teal300: '#80CBC4',
  Teal400: '#4F9A94',
  Teal500: '#274C49',
  Yellow100: '#FFFFA7',
  Yellow200: '#FFFF50',
  Yellow300: '#FDCC00',
  Yellow400: '#C59C00',
  Yellow500: '#624D00'
};
