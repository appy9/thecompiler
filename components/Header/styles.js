import styled, {css} from 'styled-components';

export const Header = styled.header`
  padding: 16px 0;
  background: white;
  border-bottom: 1px solid ${p => p.theme.Grey};
`;

export const width = css`
  width: 300px;
`;

export const Input = styled.input`
  ${width};
  padding: 5px 7px;
  border: 1px solid ${p => p.theme.Grey};
  border-radius: 2px;
`;

export const Item = styled.p`
  padding: 8px;
  cursor: pointer;

  ${p =>
    p.highlighted &&
    css`
      background: ${p => p.theme.Blue};
      color: white;
    `};
`;

export const Items = styled.div`
  position: absolute;
  ${width};
  z-index: 9999;
  background: white;
  border: 1px solid ${p => p.theme.Grey};
  border-top: none;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
  margin-right: 15px;
  font-size: 22px;

  h1,
  p {
    font-weight: 600;
    display: inline-block;
  }
`;

export const SubmitLink = styled(Link)`
  float: right;
  margin-right: 0;

  &:hover {
    color: ${p => p.theme.Blue};

    p {
      text-decoration: underline;
    }
  }
`;
