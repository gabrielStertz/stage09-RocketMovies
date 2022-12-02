import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  color: ${({theme}) => theme.COLORS.WHITE};
  
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";

  > main{
    grid-area: content;
    overflow-y: auto;
    scrollbar-width: 8px;
    scrollbar-color: ${({theme}) => theme.COLORS.PINK} transparent;
  }

  .tags{
    display: flex;
    gap: 24px;
    padding: 16px;
    border-radius: 8px;
    
    background-color: ${({theme}) => theme.COLORS.BLACK};
  }
`;

export const Form = styled.form`
  margin: 40px 123px 101px;

  > header{
    display: flex;
    flex-direction: column;

    margin-bottom: 40px;

    button{
      display: flex;
      align-items: center;
      background: none;
      border: none;
      font-size: 16px;
      margin-bottom: 24px;
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }
  > div{
    display: flex;
    gap: 40px;
    margin-bottom: 40px;

  }
  .delete{
    background-color: ${({theme}) => theme.COLORS.BLACK};
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;