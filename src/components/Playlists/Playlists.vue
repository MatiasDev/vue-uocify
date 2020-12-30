<template>
    <article class="playlist col">
        <router-link :to="{ name: 'playlist', params: {idplaylist: playlist.id }}"><img class="playlist-cover" :src="playlist.picture_medium" :alt="playlist.title"></router-link>
        <span class="playlist-title">{{playlist.title}}</span>
        <span class="playlist-user">{{playlist.user.name}}</span>
    </article>
</template>

<script>

export default {
    name: 'Playlists',
    props: { playlist: Object },
}
</script>

<style lang="scss">
    .playlist{
        margin-bottom: 15px;
        text-align: center;
        line-height: 1.3em;
    }

    .playlist-title{
        display: block;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;    
        font-weight: 600;    
    }

    .playlist-user{
        font-size: 12px;
    }

    .playlist-cover{
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        border-radius: 50%;
        background: $grey-light;
        border: 1px solid $border-color;
        display: block;
    }
    
</style>
