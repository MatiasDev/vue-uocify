<template>
    <div class="contenedorArtistas">
        <h2>Artistas <i class="fas fa-chevron-right"></i></h2>
        <div class="row mb-4">
            <div class="col-sm-12 col-md-2"  v-for="artist in artists" :key="artist.id">
                <figure>
                    <img v-bind:src="artist.picture_small" class="img-fluid redondo"/>
                    <figcaption><span>{{artist.name}}</span> <span>{{artist.nb_fan}} fans</span></figcaption>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ArtistList",
    data() {
        return {
        artists: ArtistsData.data,
        }
    }
}
import ArtistsData from "@/json/artists.json";
</script>

<style>

</style>