import { Container } from "./style";

export function Input({icon: Icon, onChange, ...rest}){
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      <input onChange={onChange} {...rest} />
    </Container>
  );
};