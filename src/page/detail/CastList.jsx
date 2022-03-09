import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';

const CastList = (props) => {
    const {category} = useParams();
    const [casts,setCasts] = useState([])

    useEffect(()=>{
        const getCredits = async () =>{
            const res = await tmdbApi.creadits(category,props.id);
            setCasts(res.cast.slice(0,5));
        }
        getCredits();
    },[category,props.id])
    return (
        <div className="casts">
            {
                casts.map((item,i)=>(
                    <div key={i} className="casts_item">
                        <div className="casts_item_img" style={{backgroundImage:`url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        <p className="casts_item_name">{item.name}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default CastList;