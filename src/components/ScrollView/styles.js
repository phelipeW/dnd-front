import styled, { css } from "styled-components";

import { shade } from "polished";
import colors from "../../../src/utils";

export const ScrollViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background: ${colors.transparent};
  }

  &::-webkit-scrollbar-track:hover {
    background: ${colors.blackTransparent};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${colors.gray};
    border-radius: 5px;
  }

`;
