import Card from '../card/Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   return (
     <div className={styles.container} >
      {characters.map((char) => (
         <card
         key={char.name}
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         onClose={()=>alert('Emulamos que se cierra la card')}
         />
      ))}
   </div>
   );
}
