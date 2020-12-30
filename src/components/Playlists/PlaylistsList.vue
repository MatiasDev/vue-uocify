<template>
    <section class="playlist-list row row row-cols-1 row-cols-sm-2 row-cols-md-4  row-cols-lg-5">
        <Playlists
            v-for="playlist in playlists"
            :key="playlist.id"
            :playlist="playlist"
        />
        
    </section>
</template>

<script>

import Playlists from '@/components/Playlists/Playlists';

export default {
    components: {Playlists},
    name: 'PlaylistsList',
    props: {playlists:Array},
}
</script>