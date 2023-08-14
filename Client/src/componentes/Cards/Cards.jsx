import Card from "../Card/Card";
import style from './Cards.module.css';

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div className={style.container}>
      {
        characters?.map((character) => {
          return (
            <Card
              key={character.id}
              id= {character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              origin = {character.origin.name}
              status ={character.status}
              image={character.image}
              onClose={onClose}
            />
          );
        })
      
      }
    </div>
  );
}
