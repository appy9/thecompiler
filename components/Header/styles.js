import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid ${p => p.theme.Grey400};
  background: white;
  padding: 12px 0;
`;

export const Input = styled.input`
  border: 1px solid ${p => p.theme.Grey400};
  border-radius: 3px;
  padding: 6px;
  min-width: 75px;
`;

export const Logo = styled.div`
  display: inline-block;
  margin-right: 16px;
  font-size: 24px;
  color: black;
  cursor: pointer;
`;
