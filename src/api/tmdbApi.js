import axiosClient from "./axiosClient";

export const category ={
    movie:"movie",
    tv:"tv",
}

export const movieType ={
    upcoming: "upcoming",
    popular: "popular",
    top_rated: "top_rated"
}

export const tvType ={
    popular: "popular",
    top_rated: "top_rated",
    on_the_air: "on_the_air"
}

const tmdbApi = {
    getMoviesList:(type,params)=>{
        const url = "movie/" + movieType[type];
        return axiosClient.get(url,{params:{language: "ko-KR"}})
    },
    getTvList:(type,params)=>{
        const url = "tv/" + tvType[type];
        return axiosClient.get(url,{params:{language: "ko-KR"}})
    },
    getVideo:(cate,id)=>{
        const url = category[cate] +"/"+ id + "/videos";
        return axiosClient.get(url,{params:{language: "ko-KR"}});
    },
    search:(cate,params)=>{
        const url = "search/"+ category[cate];
        return axiosClient.get(url,params);
    },
    detail:(cate,id,params)=>{
        const url = category[cate] + "/" + id;
        return axiosClient.get(url,{params:{language: "ko-KR"}});
    },
    creadits:(cate,id)=>{
        const url = category[cate] + "/" + id + "/credits";
        return axiosClient.get(url,{params:{language: "ko-KR"}});
    },
    similar:(cate,id)=>{
        const url = category[cate] + "/" + id + "/similar";
        return axiosClient.get(url,{params:{language: "ko-KR"}});
    },
}

export default tmdbApi;