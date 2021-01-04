export async function getPlaylists() {
    /*
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists")
    const data = await res.json();
    return data;
    */
	// Get the post data
	var data = await (await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists').catch(handleError)).json();
    if (data.code && data.code === 400) return data;
    else{
        console.log("El servicio externo no ha respondido")
        return false;
    }
}

export async function getPlaylist(idplaylist) {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/"+idplaylist)
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

var handleError = function (err) {
	console.warn(err);
	return new Response(JSON.stringify({
		code: 400,
		message: 'Stupid network Error'
	}));
};