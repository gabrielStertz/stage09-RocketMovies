import { Container } from "./style";

import { FiPlus, FiX } from 'react-icons/fi'

export function MovieTag({ isNew, value, onClick, ...rest }){
  return(
    <Container isNew={isNew}>
      <span readOnly={!isNew} {...rest}>{isNew ? 'Novo Marcador' : value} </span>
      <button type='button' onClick={onClick} className={isNew ? 'button-add' : 'button-delete'}>
        {isNew ? <FiPlus/> : <FiX/>}
      </button>  
    </Container>
  );
};