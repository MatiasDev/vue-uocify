<template>
    <main class="page-search">
        <h1 class="main-title">Ficha de <span>{{artist.name}}</span></h1>
        <detail :artist="artist" />
    </main>
</template>

<script>

import Detail from '@/components/Artists/Detail'
import {getArtist} from "../api.js";

export default {
    name:'Artist',
    components:{ Detail },
    data(){
        return{
            artist:{},
            idartist: null
        }
    }, 
    methods:{
        loadArtist : function(idArtist){
            getArtist(idArtist).then(data => {
                this.artist = data;
            })
        },

    },
    created(){
        this.idartist = this.$route.params.idartist;
        this.loadArtist(this.idartist)
    }
}
</script>


<style lang="scss" >

    .page-artist{
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