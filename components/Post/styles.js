import styled from 'styled-components';

export const Authors = styled.div`
  p,
  span {
    color: ${p => p.theme.Grey500};
  }

  p {
    display: inline-block;
  }

  span {
    margin: 0px 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Div = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${p => p.theme.Grey400};

  a {
    text-decoration: none;
  }

  &:first-of-type {
    padding-top: 0px;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

export const InfoLine = styled.div`
  margin-bottom: 4px;

  &:last-of-type {
    margin-bottom: none;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: ${p => p.theme.Blue300};

  &:hover {
    text-decoration: underline;
  }
`;
