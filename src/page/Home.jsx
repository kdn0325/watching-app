import { Link } from 'react-router-dom';
import { OutlineButton } from '../component/button/Button';
import HeroSlide from '../component/hero-slide/HeroSlide';
import MovieList from '../component/movie-list/MovieList';
import { category,movieType,tvType } from '../api/tmdbApi';

const Home = () => {
    return (
        <>
            <HeroSlide/>
            <div className="container">
                <div className="section mb-3">
                    <div className="sction_header mb-2">
                        <h2>현재 상영중인 영화</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">더보기</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>
                <div className="section mb-3">
                    <div className="sction_header mb-2">
                        <h2>인기 영화</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">더보기</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div> 
                <div className="section mb-3">
                    <div className="sction_header mb-2">
                        <h2>현재 방영중인 프로그램</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">더보기</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div> 
                <div className="section mb-3">
                    <div className="sction_header mb-2">
                        <h2>인기 프로그램</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">더보기</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div> 
            </div>
        </>
    );
};

export default Home;