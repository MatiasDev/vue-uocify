<template>
    <main class="page-search container">
        <h1>Resultados de <span>{{query}}</span></h1>

            <!-- TABS -->
            <div class="container contenedor-resultados">
            <b-tabs content-class="mt-3">
                <b-tab title="Todo" active>
                    <TrackList :limit=6 />
                    <AlbumList :limit=6 />
                    <ArtistList :limit=6 />
                </b-tab>
                <b-tab title="Canciones"><TrackList :limit=50 /></b-tab>
                <b-tab title="Álbumes"><AlbumList :limit=50 /></b-tab>
                <b-tab title="Artistas"><ArtistList :limit=50 /></b-tab>
            </b-tabs>
            </div>

    </main>
</template>

<script>
    import { EventBus } from '@/event-bus.js';
    import AlbumList from '@/components/AlbumList'
    import ArtistList from '@/components/ArtistList'
    import TrackList from '@/components/TrackList'

    export default {
        name:'SearchResults',
        components: {
            AlbumList, 
            ArtistList, 
            TrackList
        },
        data(){
            return{
                query:""
            }
        },
        created(){
            EventBus.$on('query', this.onQueryUpdated)
        },
        beforeDestroy(){
            EventBus.$off("query", this.onQueryUpdated)
        },
        methods: {
            onQueryUpdated(query){
                this.query = query
                console.log(query)
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



        /* TABS */ 
        .nav.nav-tabs,.nav.nav-tabs .nav-link{
            font-size: 0.7rem;
            color:#666
        }

        .nav.nav-tabs,.nav.nav-tabs .nav-link.active{
            border:0;
        }
        .nav.nav-tabs .nav-link.active{
            border-bottom:2px solid red;
            font-weight: 600;
        }

        .nav.nav-tabs .nav-link.active{
            border-bottom:2px solid red;
            font-weight: 600;
        }


        .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover{
            border-color:transparent;
            border-bottom:1px solid #999;
            color:#000;
        }

        
    }

</style>