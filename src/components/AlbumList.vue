<template>
    <div class="contenedorAlbums">
        <h2>Álbumes<i class="fas fa-chevron-right"></i></h2>
        <div class="row mb-4">
            <div class="col-sm-12 col-md-2" v-for="album in controlFilteredResults" :key="album.id">
            <figure>
                <img v-bind:src="album.cover_medium" class="img-fluid redondo"/>
                <figcaption><span>{{album.title}})</span><span>{{album.artist.name}})</span></figcaption>
            </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AlbumList",
    props:{
        limit:Number
    },
    data() {
        return {
            albums: AlbumsData.data,
        }
    },
    computed: {
        controlFilteredResults() {
            if (this.limit) {
                return this.albums.slice(0,(this.limit))
            } else {
                return this.albums
            }
        }
    }
}
import AlbumsData from "@/json/albums.json";
</script>

<style>
.contenedorAlbums figure img{
    border:1px solid #eee;
}

.contenedorArtistas figcaption span{
    text-align:center;
}

figure img:hover{
    opacity: 0.8;
    cursor: pointer;
}

figcaption span{
    font-weight: 600;
    font-size: 0.6rem;
    display:block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 0.7rem;
    margin-top:6px;
}

figcaption span:nth-child(1){
    text-overflow: ellipsis;
}

figcaption span:nth-child(2){
    color:#666;
    font-weight: 400;
}
</style>