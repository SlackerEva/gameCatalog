import '../Games/Games.css';
import Card from '../Card/Card';
import {connect} from "react-redux";


function SavedGames({games}) {
  return (
    <div className='main-grid'>
      {games.map((game) => {
        return <Card game={game} key={game.id} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    games: state.savedGames.savedGames
  };
};

export default connect(mapStateToProps, null) (SavedGames);