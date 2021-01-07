export async function getPlaylists() {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists")
    const data = await res.json();
    return data;
}

export async function getPlaylist(idplaylist) {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/"+idplaylist)
    const data = await res.json();
    return data;
}

export async function getArtistTop(idartist) {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+idartist+"/top")
    const data = await res.json();
    return data;
}

export async function getArtistAlbums(idartist) {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+idartist+"/albums")
    const data = await res.json();
    return data;
}
    
export async function getTracks(q) {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q="+q)
    const data = await res.json();
    return data;
}

export async function getAlbums(q) {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q="+q)
    const data = await res.json();
    return data;
}

export async function getArtists(q) {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q="+q)
    const data = await res.json();
    return data;
}

export async function getArtist(q) {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+q)
    const data = await res.json();
    return data;
}