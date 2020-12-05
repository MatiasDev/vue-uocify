<template>
<form @submit.prevent>
<div class="input-group">
    <div class="input-group-prepend">
        <div class="input-group-text"><fa-icon icon="search" /></div>
    </div>
    <input type="text" name="query" v-model="query" @keyup.enter="sendQuery()" class="form-control form-control-sm" placeholder="the beatles">
</div>
</form>
</template>

<script>

import { EventBus } from '@/event-bus.js';

export default {
    name:'SearchBar',
    data() {
        return {
            query: "",
        }
    },
    methods: {
        sendQuery () {
            EventBus.$emit("query",this.query)
        }
  }
}
</script>

<style lang="scss">
    .input-group-text{
        border:0;
        background-color: #fff;
        font-size: 0.8rem;
        padding:2px;
    }

    .form-control{
        border:0;
        font-size: 0.8rem;
    }
</style>