import styled from "styled-components";
import colors from "../../utils";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;

  p {
    font-size: 24px;
    color: ${colors.primary}
  }
`;

export const Header = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;

`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;

  input{
    flex: 1;
    background-color: ${colors.blackTransparent};
    color: ${colors.white}
  }

    button {
    background-color: ${colors.grey};
    width: 40px;
  }
`;

export const InputContainer = styled.div`
  background: ${colors.inputs};
  border-radius: 2px;
  border: 2px solid ${colors.inputs};
  padding: 16px;
  width: 400px;
  color: ${colors.grayHard};

  display: flex;
  flex-direction: column;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;


    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* &::placeholder {
      color: ${colors.grey};
    } */
  }
`;

export const Button = styled.button`
  margin-top: 20px;;
    width: 200px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  border-width: 0;
  background-color: ${colors.secundary};
`;

export const PostContainer = styled.div`
  width: 30%;
  margin-top: 20px;
`


export const PostTop = styled.div`
  background-color: ${colors.blackTransparent};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  p{
    margin:0;
  }
`

export const PostBottom = styled.div`
  background-color: ${colors.grey};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px;

  p{
    margin:0;
  }
`
export const FormContainer = styled.div`
  width: 35%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.grey};
  border-radius: 8px;
  padding: 20px;
  margin-top: 40px;

  p {
    color: ${colors.white};
    font-size: 24px;
  }
`