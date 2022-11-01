import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  
  > svg{
      width: 12px;
      height: 12px;

      color: ${({theme}) => theme.COLORS.PINK};
    }  
`;