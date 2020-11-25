<template>
<div class="input-group">
<div class="input-group-prepend">
<div class="input-group-text"><fa-icon icon="search" /></div>
</div>
<input type="text" class="form-control form-control-sm" placeholder="the beatles">
</div>
</template>

<script>
export default {
    name:'SearchBar',
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