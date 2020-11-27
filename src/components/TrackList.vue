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
            <tr v-for="track in tracks" :key="track.id">
                <td><img src="@/assets/albums/let-it-be.jpg" class="img-fluid" alt="Foto del albúm Let It Be (Remastered)"></td>
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
    data() {
        return {
        tracks: TrackData.data,
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

</style>