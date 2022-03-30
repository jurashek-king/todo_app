import styled from 'styled-components';

export const StyledNav = styled.nav`
  margin-top: 0.4rem;
  margin-bottom: 1rem;
  position: relative;

  button {
    position: absolute;
    right: 0;
  }

  input:not(:first-of-type) {
    margin-left: 1rem;
  }

  p {
    margin-top: 0.3rem;
  }
`;

export const StyledRadio = styled.input`
  margin-right: 0.3rem;
`;

export const StyledLabel = styled.label`
  font-size: 1.2rem;
`;
