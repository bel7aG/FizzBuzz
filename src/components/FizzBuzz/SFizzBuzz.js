import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  0% {
    opacity: 0.21;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.21;
  }
`

export const SFizzBuzz = styled.div`
  position: relative;
  height: 100vh;

  min-height: 19rem;

  &,
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }

  > time {
    height: 45vh !important;
    width: 45vh !important;
    > div {
      &:not(:last-child) {
        * {
          background-color: #fff;
        }
        &:first-child {
          border: ${props =>
            props.isFizzBuzz ? "0.2rem solid #19e19c" : "1px solid #fff"};

          transform: ${props =>
            props.isFizzBuzz
              ? "scale(1.06) rotate(134deg)"
              : "scale(1) rotate(0)"};

          transition: all 0.6s ease-in-out;
        }
      }
    }
  }

  > div {
    margin-top: -12rem;
    height: 12rem;
    > h1 {
      animation: ${fadeIn} 1s 0ms infinite forwards;
      color: ${props => (props.isFizzBuzz ? "#19E19C" : "#fff")};
    }
  }
`
