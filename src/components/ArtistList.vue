<template>
    <div class="contenedorArtistas">
        <h2>Artistas <i class="fas fa-chevron-right"></i></h2>
        <div class="row mb-4">
            <div class="col-sm-12 col-md-2"  v-for="artist in controlFilteredResults" :key="artist.id">
                <figure>
                    <img v-bind:src="artist.picture_medium" class="img-fluid redondo"/>
                    <figcaption><span>{{artist.name}}</span> <span>{{artist.nb_fan}} fans</span></figcaption>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ArtistList",
    props:{
        limit:Number
    },
    data() {
        return {
        artists: ArtistsData.data,
        }
    },
    computed: {
        controlFilteredResults() {
            if (this.limit) {
                return this.artists.slice(0,(this.limit))
            } else {
                return this.artists
            }
        }
    }
}
import ArtistsData from "@/json/artists.json";
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