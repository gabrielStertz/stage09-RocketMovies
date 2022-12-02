import styled from "styled-components";

export const Container = styled.div`
  height: 56px;

  display: flex;
  align-items: center;
  gap: 16px;

  background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_900 };
  color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE };

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  border-radius: 10px;
  padding: 16px;

  > input{
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

  > button{
    border: none;
    background: none;
  }

  .button-delete{
    color: ${({theme}) => theme.COLORS.PINK}
  }

  .button-add{
    color: ${({theme}) => theme.COLORS.PINK}
  }

`;