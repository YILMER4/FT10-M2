import Card from '../card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={styles.container}>
         {characters.map((char) => (
            <card
               key={char.name}
               name={char.name}
               species={char.species}
               gender={char.gender}
               image={char.image}
               onClose={() => onclose(char.id)}
            />
         ))}
      </div>
   );
}
