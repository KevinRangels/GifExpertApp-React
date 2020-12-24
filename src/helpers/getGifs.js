export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=9&api_key=KCg0cWhqqPv08Sq9TRSa8gFOJgk5RE2q`

    const resp = await fetch( url );
    const { data } = await resp.json();
    const gift = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    console.log(gift)
    return gift;
}