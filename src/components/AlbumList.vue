<template>
    <div class="contenedorAlbums">
        <h2>Álbumes <i class="fas fa-chevron-right"></i></h2>
        <div class="row mb-4">
            <div class="col-sm-12 col-md-2" v-for="album in albums" :key="album.id">
            <figure>
                <img v-bind:src="album.cover_small" class="img-fluid redondo"/>
                <figcaption><span>{{album.title}})</span><span>{{album.artist.name}})</span></figcaption>
            </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AlbumList",
    data() {
        return {
        albums: AlbumsData.data,
        }
    }
}
import AlbumsData from "@/json/albums.json";
</script>

<style>

</style>