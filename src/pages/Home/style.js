import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

`;


export const Content = styled.div`
  grid-area: content;
  padding: 0 123px;
  overflow-y: auto;
  scrollbar-width: 8px;
  scrollbar-color: ${({theme}) => theme.COLORS.PINK} transparent;

  > div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 47px 0 37px;

    > h1{
      font-size: 32px;
      font-weight: 400;

      color: ${({theme}) => theme.COLORS.WHITE  };
    }
  }
`;

export const AddMovie = styled(Link)`
  width: 207px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  border-radius: 10px;

  > svg{
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    
    margin-right: 8px;
  }
`;
