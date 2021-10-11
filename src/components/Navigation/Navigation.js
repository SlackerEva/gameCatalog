import "./Navigation.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function Navigation({games}) {
  return (
    <nav className="nav">
      <div className="nav__wraper">
        <Link className="nav__link" to="/games">Каталог</Link>
        <Link className="nav__link" to="/saved-games">
          Избранное 
          <p className="nav__count">{games.length}</p>
          </Link>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    games: state.savedGames.savedGames
  };
};

export default connect(mapStateToProps, null) (Navigation);