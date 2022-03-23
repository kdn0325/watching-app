import "./moviecard.scss";
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const MovieCard = (props) => {
    const item = props.item;
    const link = "/" + category[props.category] + "/" + item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage:`url(${bg})`}}>
                <Button>
                    <i class="fa-solid fa-circle-play"></i>
                </Button>
            </div>
            <h3>{item.title||item.name}</h3>
        </Link>
    );
};

MovieCard.propTypes = {
    
};

export default MovieCard;