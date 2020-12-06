<template>
  <main class="page-home">
    <div class="container container-thin">
    <img class="logo" src="@/assets/icon.svg" alt="logo">
    <h1 class="main-title">¿En busca de música?</h1>
    <p class="lorem-textum">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus arcu, feugiat eu molestie in, finibus sit amet lorem. Phasellus consectetur ipsum in imperdiet ultrices. </p>
    <router-link to="search" class="alink"  v-if="isLoggedIn">Consulta el catálogo</router-link>
    </div>
  </main>
</template>

<script>
import firebase from 'firebase';
export default {
  name:'Home',
  data(){
    return {
      isLoggedIn:false,
      currentUser:null
    }
  },
  created(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.currentUser = user;
      this.isLoggedIn=true;
    } else {
      this.user = null;
      this.isLoggedIn=false;
    }
  });

  },
}
</script>


<style lang="scss">
.page-home{
  text-align: center;
  padding-left:30px;
  padding-right:30px;

  .logo{
  width: 200px;
  margin-top: 25px;
  margin-bottom: 25px;
  }

  .container-thin{
  max-width: 600px;
  }
}
</style>