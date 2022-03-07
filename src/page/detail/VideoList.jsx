import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import tmdbApi from '../../api/tmdbApi';

const VideoList = (props) => {
    const {category} = useParams();
    const [videos,setVideos] = useState([])

    useEffect(()=>{
        const getVideo = async () =>{
            const res = await tmdbApi.getVideo(category,props.id);
            setVideos(res.results.slice(0,5));
        }
        getVideo();
    },[category,props.id])
    return (
        <>
            {
                videos.map((item,i)=>(
                    <Video key={i} item={item}/>
                ))
            }
        </>
    );
};

const Video = (props) =>{
    const item= props.item;
    const iframeRef = useRef(null);

    useEffect(()=>{
        const height = iframeRef.current.offsetWidth * 9/16 + "px";
        iframeRef.current.setAttribute("height", height);
    },[])
    return (
        <div className="video">
            <div className="video_title">
                <h2>{item.name}</h2>
            </div>
            <iframe src={`https://www.youtube.com/embed/${item.key}`} ref={iframeRef} width="100%" title="video"></iframe>
        </div>
    )
}

export default VideoList;