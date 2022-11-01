import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  border: none;
  border-radius: 10px;

  padding: 32px;
  margin-bottom: 24px;

  > h1{
    flex: 1;
    text-align: left;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }


  > p{
    font-size: 16px;
    text-align: justify;
    margin: 15px 0;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > footer{
    width: 100%;
    display: flex;
  }
`;