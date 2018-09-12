import styled from 'styled-components';

export const ByLine = styled.div`
  a {
    color: black;
  }

  p {
    display: inline-block;
    margin-right: 5px;
  }

  span:hover {
    color: ${p => p.theme.Blue300};
    text-decoration: underline;
  }
`;

export const Div = styled.div`
  a {
    text-decoration: none;
  }
`;

export const TagLine = styled.div`
  span {
    color: ${p => p.theme.Grey500};
    margin-right: 15px;

    &:hover {
      color: ${p => p.theme.Blue300};
      text-decoration: underline;
    }
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${p => p.theme.Blue300};

  &:hover {
    text-decoration: underline;
  }
`;
