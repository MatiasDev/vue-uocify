<template>
    <article class="artist">
        <square v-show="isLoading"></square>
        <section class="row">
            <div class="col-4">
                <img class="artist-picture" :src="artist.picture_big" :alt="artist.name">
            </div>
            <div class="col-8">
                <div>
                    <span class="artist-fans">Nº fans</span>
                    <h2>{{artist.nb_fan | separadorCentenas }}</h2>
                </div>

                <div class="mt-4">
                    <span class="artist-fans">Nº Albums</span>
                    <h2>{{artist.nb_album}}</h2>
                </div>

                <div class="mt-4">
                    <a @click="$router.go(-1)" class="btn btn-secondary btn-lg">Volver</a>
                </div>

            </div>
        </section>
        <section class="mt-4">
            <h1 class="main-title">Albums de<span> {{artist.name}}</span></h1>
            <album-list :albums="albums" />
        </section>
    </article>
    <!--
debería incluir la imagen del artista, el nombre y número de fans en la parte superior y después mostrar, como mínimo, 
un bloque de canciones y un bloque de álbumes (reutilizando los componentes de listado existentes)
    -->
</template>

<script>

import AlbumList from '@/components/Albums/AlbumList'
import {getArtistAlbums} from "../../api.js";

export default {
    name: 'Detail',
    components:{ AlbumList},
    props: { artist: Object }, 
    data(){
        return{
            albums:[],
            idartist : this.$route.params.idartist || '',
            isLoading: false,
        }
    },
    methods:{
        loadArtistAlbums : function(idArtist){
            getArtistAlbums(idArtist).then(data => {
                this.isLoading=false;
                this.albums = data.data;
            })
        },

    },
    created(){
        this.isLoading=true;
        if(this.idartist){
            this.loadArtistAlbums(this.idartist)
        }
    }
}
</script>

<style lang="scss">

        .artist{
            margin-bottom: 15px;
            text-align: center;
            line-height: 1.3em;
        }

        .artist-name{
            display: block;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;    
            font-weight: 600;    
        }

        .artist-fans{
            font-size: 12px;
        }

        .artist-picture{
            width: 100%;
            height: auto;
            margin-bottom: 10px;
            border-radius: 4px;
            background: $grey-light;
            border: 1px solid $border-color;
            display: block;
        }

</style>
