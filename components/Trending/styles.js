import styled from 'styled-components';

export const Div = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid ${p => p.theme.Grey};

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: ${p => p.theme.Blue};
    }
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
