<template>
    <main class="page-search">
        <h1 class="main-title">Resultados...</h1>

            <!-- TABS -->
            <div>
            <b-tabs content-class="mt-3">
                <b-tab title="Todo" active><p>I'm the first tab</p></b-tab>
                <b-tab title="Canciones"><TrackList/></b-tab>
                <b-tab title="Álbumes"><AlbumList/></b-tab>
                <b-tab title="Artistas"><ArtistList/></b-tab>
            </b-tabs>
            </div>

    </main>
</template>

<script>

    import AlbumList from '@/components/AlbumList'
    import ArtistList from '@/components/ArtistList'
    import TrackList from '@/components/TrackList'

    export default {
        name:'SearchResults',
        components: {
            AlbumList, 
            ArtistList, 
            TrackList, 
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