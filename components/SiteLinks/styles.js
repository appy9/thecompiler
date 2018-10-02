import styled from 'styled-components';

export const Div = styled.div`
  a {
    color: ${p => p.theme.GreyDark};
    text-decoration: none;

    &:hover {
      p {
        text-decoration: underline;
      }
    }
  }

  p {
    display: inline-block;
    margin-right: 15px;
    line-height: 30px;
  }
`;
