import './Games.css';
import Card from '../Card/Card';
import gamesArr from "../../utils/games";

function Games() { 
  return (
    <div className='main-grid'>
      {gamesArr.map((game) => {
        return <Card game={game} key={game.id} />;
      })}
    </div>
  );
}

export default Games;