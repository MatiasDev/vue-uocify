<template>
    <div class="contenedorCanciones">
        <h2>Canciones <i class="fas fa-chevron-right"></i></h2>
        <h2>295 canciones</h2>
        
        <table class="table table-sm table-hover" id="tablaCanciones">
            <thead>
            <tr>
                <th></th>
                <th>CANCIÓN</th>
                <th>ARTISTA</th>
                <th>ÁLBUM</th>
                <th>D.</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="track in controlFilteredResults" :key="track.id">
                <td><img v-bind:src="track.album.cover_small" class="img-fluid" alt="Foto del albúm Let It Be (Remastered)"></td>
                <td>{{track.title}}</td>
                <td>{{track.artist.name}}</td>
                <td>{{track.album.title}}</td>
                <td>{{track.duration | formatTime}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:"TrackList",
    props:{
        limit:Number
    },
    data() {
        return {
        tracks: TrackData.data,
        }
    },
    computed: {
        controlFilteredResults() {
            if (this.limit) {
                return this.tracks.slice(0,(this.limit-1))
            } else {
                return this.tracks
            }
        }
    },
    filters:{
        // este filtro transforma segundos a minutos:segundos
        formatTime: function( value ){
        var seconds = Math.floor( value % 60 ).toString();
        var minutes = Math.floor( value / 60 ).toString();
        if( minutes.length === 1 ){
            minutes = '0' + minutes;
        }     
        if( seconds.length === 1 ){
            seconds = '0' + seconds;
        }                
        return minutes + ':' + seconds;
        }
    }
}
import TrackData from "@/json/tracks.json";

</script>

<style>
.contenedorCanciones{
    margin-bottom: 1.5rem;
}

.contenedorCanciones .table thead th {
    font-size:0.6rem;
    color:#666;
}
.contenedorCanciones .table thead th {
    border-bottom:1px;
    padding: .7rem;
}

#tablaCanciones img{
    max-width:28px;
    border-radius: 3px;
}
#tablaCanciones td{
    font-size: 0.7rem;
    vertical-align: middle;
}
</style>