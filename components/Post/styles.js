import styled from 'styled-components';

export const ByLine = styled.div`
  p {
    display: inline-block;
    margin-right: 5px;
  }

  span:hover {
    color: ${p => p.theme.Blue};
    text-decoration: underline;
  }
`;

export const Div = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid ${p => p.theme.Grey};

  a {
    text-decoration: none;
    color: black;
  }

  &:first-of-type {
    margin-top: 0px;
    padding-top: 0px;
  }

  &:last-of-type {
    margin-bottom: 0px;
    padding-bottom: 0px;
    border-bottom: none;
  }
`;

export const TagLine = styled.div`
  span {
    color: ${p => p.theme.GreyDark};
    margin-right: 15px;
    text-transform: uppercase;

    &:hover {
      color: ${p => p.theme.Blue};
      text-decoration: underline;
    }
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;

  &:hover {
    color: ${p => p.theme.Blue};
    text-decoration: underline;
  }
`;
