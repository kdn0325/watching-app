import React from 'react';
import "./detail.scss";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';
import CastList from './CastList';
import VideoList from './VideoList';
import MovieList from "../../component/movie-list/MovieList"
const Detail = () => {
    const {category ,id} =useParams();
    const [item,setItem] = useState(null);

    useEffect(()=>{
        const getDetail = async ()=>{
            const response = await tmdbApi.detail(category,id,{params:{}})
            setItem(response);
            window.scrollTo(0,0)
        }
        getDetail();
    },[category,id]);
    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" 
                        style={{backgroundImage:`url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}>
                        </div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content_poster">
                                <div className="movie-content_poster_img" style={{backgroundImage:`url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}>
                                    
                                </div>
                            </div>
                            <div className="movie-content_info">
                                <div className="title">
                                    {item.title || item.name}
                                </div>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0,5).map((genre,i)=>(
                                        <span className="genres_item" key={i}>{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p className="overview">{item.overview}</p>
                                <div className="cast">
                                    <div className="section_header">
                                        <h2>Casts</h2>
                                    </div>
                                        <CastList id={item.id}/>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.id}/>
                            </div>
                            <div className="section mb-3">
                                <div className="section_header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id ={item.id}/>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default Detail;