<template>
  <header class="header d-flex w-100">
    
    <div class="align-self-center p-2">
      <a href="/"><img src="@/assets/uocify_logo.svg" alt="Logo UOCIFY" class="logo-cabecera" /></a>
    </div>
    
    <div class="flex-grow-1 align-self-center p-2">
        <SearchBar/>
    </div>
    
    <div class="align-self-center p-2">
      <span class="nombre-usuario">Matias</span>
      <span class="ico-usuario"><fa-icon icon="user" /></span>
    </div>
    
  </header>
</template>


<script>
    import SearchBar from '@/components/SearchBar'
    export default {
        name:'AppHeader',
        components: {
            SearchBar, 
         }
    }
</script>


<style lang="scss">
    .header{
        box-shadow: 0 0 10px -5px #999;
        background-color: #fff;
        position:fixed;
        z-index: 999;
         z-index: 100;
    }

    .logo-cabecera{
        width:130px;
        height:auto;
        margin-left:12px;
    }

    .nombre-usuario{
        font-size: 0.7rem;
        font-weight: 600;
        margin-right:10px;
    }  

    .ico-usuario{
        background-color: #eee;
        padding:6px;
        border-radius: 50%;
        font-size:0.8rem
    }   

</style>