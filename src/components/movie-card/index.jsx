import { Container } from "./style";
import { StarNote } from "../StarNotes";
import { Tag } from "../tag";

export function MovieCard({ data, ...rest }){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      <StarNote stars={data.rating}/>

      <p>{data.description}</p>


      {
        data.movie_tags &&
        <footer>
          {
            data.movie_tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
          }  
        </footer>
      }
    </Container>
  );
};