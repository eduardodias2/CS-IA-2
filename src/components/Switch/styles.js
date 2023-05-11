import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 4.5rem;
  height: 2.55rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    :checked + .slider {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_E_700};
    }
    :focus + .slider {
      box-shadow: 0 0 1px ${({ theme }) => theme.COLORS.BACKGROUND_E_700};
    }
    :checked + .slider:before {
      -webkit-transform: translateX(19.5px);
      -ms-transform: translateX(19.5px);
      transform: translateX(19.5px);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #ccc;
    transition: 0.4s;
    -webkit-transition: 0.4s;
    border-radius: 3.4rem;

    :before {
      position: absolute;
      content: "";
      height: 19.5px;
      width: 19.5px;
      border-radius: 50%;
      background-color: white;
      left: 0.3rem;
      bottom: 0.3rem;
      transition: 0.4s;
      -webkit-transition: 0.4s;
    }
  }

  p {
    font-size: 1.6rem;
  }
`;

export const Texts = styled.div`
  display: flex;
  justify-content: center;
  gap: 6.3rem;
  padding-left: 7px;
`