<template>
    <main class="page-search">
        <h1 class="main-title">Resultados de <span>{{query}}</span></h1>
        <b-tabs>
            <b-tab id="tabAll" title="Todo" active>
                <h2 class="title">Canciones <fa-icon icon="chevron-right" class="icon" /></h2>
                <track-list :tracks="tracks.slice(0,6)" />

                <h2 class="title">Álbumes <fa-icon icon="chevron-right" class="icon" /></h2>
                <album-list :albums="albums.slice(0,6)" />

                <h2 class="title">Artistas <fa-icon icon="chevron-right" class="icon" /></h2>
                <artist-list :artists="artists.slice(0,6)" />                

            </b-tab>            
            <b-tab id="tabTracks" title="Canciones">
                <h2 class="title">{{tracksTotal}} canciones</h2>
                <track-list :tracks="tracks" />
            </b-tab>
            <b-tab id="tabAlbums" title="Álbumes">
                <h2 class="title">{{albumsTotal}} álbumes</h2>
                <album-list :albums="albums" />
            </b-tab>            
            <b-tab id="tabArtists" title="Artistas">
                <h2 class="title">{{artistsTotal}} artistas</h2>
                <artist-list :artists="artists" />
            </b-tab>
        </b-tabs>
    </main>
</template>

<script>

import TrackList from '@/components/Tracks/TrackList'
import AlbumList from '@/components/Albums/AlbumList'
import ArtistList from '@/components/Artists/ArtistList'

import {getTracks,getAlbums,getArtists} from "../api.js";

export default {
    name:'SearchResults',
    components:{ AlbumList, ArtistList, TrackList },
    data(){
        return{
            tracks:[],
            albums:[],
            artists:[],
            tracksTotal:null,
            albumsTotal:null,
            artistsTotal:null,
            query: this.$route.params.q || ''
        }
    },    
    watch: {
        '$route.params.q': function (q) {
            this.query = q
            this.updateTracks(q);
            this.updateAlbums(q);
            this.updateArtists(q);
        }
    }, 
    methods:{
        updateTracks : function(query){
                    getTracks(query).then(data => {
                        this.tracks = data.data;
                        this.tracksTotal = data.total;
                        
                    })
                },
        updateAlbums  : function(query){
                    getAlbums(query).then(data => {
                        this.albums = data.data;
                        this.albumsTotal = data.total;
                        //console.log(this.albums)
                    })
                },
        updateArtists : function(query){
                    getArtists(query).then(data => {
                        this.artists = data.data;
                        this.artistsTotal = data.total;
                        //console.log(this.artists)
                    })
                }
    }
}
</script>


<style lang="scss" >

    .page-search{
        display: flex;
        flex-direction: column;
        height: 100%;

        .main-title {
            margin-bottom: 20px;

            span{
                color: $grey-label;
            }
        }

        .tabs{
            background: white;
            flex: 1;
            height: 100%;
        }

        #tabAll{
            .title{
                font-size: 18px;

                .icon{
                    font-size: 14px;
                    margin-left: 3px;
                }
            }

            .track-list{
                margin-bottom: 30px;
                thead{
                    display: none;
                }
            }

            section{
                margin-bottom: 30px;
            }
        }
    }


</style>