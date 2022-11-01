import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main{
    grid-area: content;
    overflow-y: scroll;
    padding: 40px 0 156px;

    scrollbar-width: 8px;
    scrollbar-color: ${({theme}) => theme.COLORS.PINK} transparent;

    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;

export const Content = styled.div`
  margin: 0 123px;

  display: flex;
  flex-direction: column;

  > a{
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({theme}) => theme.COLORS.PINK};
  };
  .title{
    display: flex;
    align-items: center;
    gap: 19px;
    margin: 24px 0;
    > h1 {
      font-size: 36px;
      font-weight: 500;
    }
    > div > svg{
      height: 20px;
      width: 20px;
    }
  }
  .movie-info{
    display: flex;
    align-items: center;
    gap: 8px;

    > img{
      height: 16px;
      width: 16px;
      border-radius: 50%;
    }

    > svg{
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }
  .tags{
    padding: 40px 0;
  }
  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`;
