export const createGif = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Y1VysAaT92OQ2AvS58dCl77K5EfLhrwa&q=${category}&limit=20`
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ))
    return gifs;
}