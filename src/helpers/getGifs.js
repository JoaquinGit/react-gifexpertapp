// regresa promesa que resuelve la colección de gifs
export const getGifs = async( category, results ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI ( category )}&limit=${ results }&api_key=F2G87QQamduTvl186RTBTLwMFL30U85c`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url 
        }
    })

    return gifs;
}