import styled from "styled-components";

export const Container = styled.div`
  height: 250px;
  width: 100%;
  padding: 1rem;
  border: 0.5rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
  }
`;

export const HeaderNote = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  div:nth-child(2) {
    display: flex;
    gap: 0.64rem;
    outline: none;
  }
  div > svg {
    height: 2.5rem;
    width: 2.5rem;
  }
  button {}
`;
