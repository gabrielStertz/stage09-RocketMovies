import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  padding: 24px 123px;

  > h1{
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  min-width: 198px;

  > div{
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    strong{
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.WHITE};
    };
  };
  `;
  
  export const Logout = styled(Link)`
    font-size: 14px;
    text-align: end;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  `;
  export const Image = styled(Link)`
    margin-left: 15px;
    > img{
      width: 64px;
      height: 64px;
      border-radius: 50%;
    };
  `;