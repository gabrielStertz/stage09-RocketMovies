import { Container } from "./style";
import { StarNote } from "../StarNotes";
import { Tag } from "../tag";

export function MovieCard({ data, ...rest }){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      <StarNote stars={data.stars}/>

      <p>{data.description}</p>


      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
          }  
        </footer>
      }
    </Container>
  );
};