<template>
    <main class="page-search">
        <h1 class="main-title">Playlist de <span>{{tracks.title}}</span></h1>
        <track-list :tracks="tracks.tracks.data" />
    </main>
</template>

<script>

import TrackList from '@/components/Tracks/TrackList'
import {getPlaylist} from "../api.js";

export default {
    name:'Playlist',
    components:{ TrackList },
    data(){
        return{
            tracks: [],
            idplaylist: null
        }
    }, 
    methods:{
        loadPlaylist : function(idplaylist){
            getPlaylist(idplaylist).then(data => {
                this.tracks = data;
                console.log(this.tracks)
            })
        },

    },
    created(){
        this.idplaylist = this.$route.params.idplaylist;
        this.loadPlaylist(this.idplaylist)
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