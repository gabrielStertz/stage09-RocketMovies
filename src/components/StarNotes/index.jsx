import { Container } from "./style";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export function StarNote({stars, ...rest}){
  if(stars == '1'){
    return(
      <Container {...rest}>
        <AiFillStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
      </Container>
    )  
  } else if(stars == '2'){
    return(
      <Container {...rest}>
        <AiFillStar/>
        <AiFillStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
      </Container>
    )
  } else if(stars == '3'){
    return(
      <Container {...rest}>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
      </Container>
    )
  } else if(stars == '4'){
    return(
      <Container {...rest}>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiOutlineStar/>
      </Container>
    )
  } else if(stars == '5'){
    return(
      <Container {...rest}>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
      </Container>
    )
  } else {
    return(
      <Container {...rest}>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
      </Container>
    )
  };
  
};