import styled, { keyframes } from "styled-components";
import { shade } from "polished";
import colors from "../../utils";

export const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;

  justify-content: center;
  align-items: center;

  p {
    font-size: 24px;
    color: ${colors.primary}
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 10px;
  box-shadow: 0px 0px 5px ${colors.blackTransparent};

  width: 100%;
  max-width: 350px;
  padding: 30px 15px;

  button {
    margin-top: 20px;;
    width: 200px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    border-width: 0;
    background-color: ${colors.secundary};
  }

  a {
    margin-top: 10px;
    color: ${colors.primary};
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, colors.primary)};
    }
  }
`;
