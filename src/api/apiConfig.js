const apiConfig = {
    baseUrl: "http://api.themoviedb.org/3/",
    apiKey:"df79b1492e6e2263c60a37bb046f355b",
    originalImage:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;