import "./Card.css";
import {connect} from "react-redux";
import {like, dislike} from '../../redux/actions';

function Card(props) {

  function toggleLike(e) {
    let event = e.target;
    event.checked === true ? props.like(props.game) : props.dislike(props.game);
  }

  return (
    <div className="card" style={{ backgroundImage: `url(${props.game.img})` }}> 
      <div className="card-block">
        <p className="card__name">{props.game.name}</p>
        <label className="card__like">
          <input className="card__like-checkbox" type="checkbox" checked={props.game.like} onChange={toggleLike} />
          <span className="card__like-mark"></span>
        </label>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  like,
  dislike
};

const mapStateToProps = (state) => {
  return {
    games: state.savedGames.savedGames
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Card);