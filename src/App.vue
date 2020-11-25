<template>
  <div id="app">
    <AppHeader />
    <div class="app-container container-fluid">
        <SearchResults />
    </div>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader'
  import SearchResults from '@/views/SearchResults'

  export default {
    name: 'App',
    components: {
      AppHeader, 
      SearchResults
    }
  }
</script>
