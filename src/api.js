export async function getPlaylists() {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists")
    const data = await res.json();
    if (data) {
        return data;
    } else {
        return false;
    }
}

export async function getPlaylist(idplaylist) {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/"+idplaylist)
    const data = await res.json();
    if (data) {
        return data;
    } else {
        return false;
    }
}

export async function getTracks(q) {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q="+q)
    const data = await res.json();
    if (data) {
        return data;
    } else {
        return false;
    }
}

export async function getAlbums(q) {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q="+q)
    const data = await res.json();
    if (data) {
        return data;
    } else {
        return false;
    }
}

export async function getArtists(q) {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q="+q)
    const data = await res.json();
    if (data) {
        return data;
    } else {
        return false;
    }
}