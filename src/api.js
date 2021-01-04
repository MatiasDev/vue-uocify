export async function getPlaylists() {
    const res = await fetch("https://api.deezer.com/chart/0/playlists",
    {
        mode: 'no-cors', // no-cors, *cors, same-origin
    })
    const data = await res.json();
    return data;
}

export async function getPlaylist(idplaylist) {
    const res = await fetch("https://api.deezer.com/playlist/"+idplaylist,
    {
        mode: 'no-cors', // no-cors, *cors, same-origin
    })
    const data = await res.json();
    return data;
}

export async function getTracks(q) {
    const res = await fetch("https://api.deezer.com/search/track?q="+q,
    {
        mode: 'no-cors', // no-cors, *cors, same-origin
    })
    const data = await res.json();
    return data;
}

export async function getAlbums(q) {
    const res = await fetch("https://api.deezer.com/search/album?q="+q,
    {
        mode: 'no-cors', // no-cors, *cors, same-origin
    })
    const data = await res.json();
    return data;
}

export async function getArtists(q) {
    const res = await fetch("https://api.deezer.com/search/artist?q="+q,
    {
        mode: 'no-cors', // no-cors, *cors, same-origin
    })
    const data = await res.json();
    return data;
}