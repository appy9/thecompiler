import styled from 'styled-components';

export const Title = styled.div`
  font-weight: 500;

  a {
    color: black;
    text-decoration: none;

    &:hover {
      color: ${p => p.theme.Blue300};

      p {
        text-decoration: underline;
      }
    }
  }

  p {
    display: inline-block;
  }
`;
