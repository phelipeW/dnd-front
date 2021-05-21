import styled from 'styled-components';
import colors from '../../utils';

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export const Label = styled.label`
  position: absolute;
  left: 5px;
  color: ${(props) =>
    props.focused ? `${colors.regular}` : `${colors.black}`};
  pointer-events: none;
  transition: 0.5s;
  top: ${(props) => (props.focused ? `${0}px` : `${10}px`)};
`;

export const InputField = styled.input`
  border: none;
  padding-top: 17px;
  padding-left: 5px;
  border-bottom: 1px solid;
  font-weight: bolder;
  font-size: 16px;
  border-color: ${(props) =>
    props.focused ? `${colors.yellow}` : `${colors.lighGrey}`};
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: none;
  outline: none;
`;

export const InputFile = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -2;
`;

export const AppendIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
`;
