<template>
  <header class="header d-flex w-100">
    
    <div class="align-self-center p-2">
      <a href="/"><img src="@/assets/uocify_logo.svg" alt="Logo UOCIFY" class="logo-cabecera" /></a>
    </div>
    
    <div class="flex-grow-1 align-self-center p-2">
        <SearchBar/>
    </div>
    
    <div class="align-self-center p-2" v-if="isLoggedIn">
      <span class="nombre-usuario">Matias</span>
      <span class="ico-usuario"><fa-icon icon="user" /></span>
      <span class="ico-logout"><fa-icon icon="sign-out-alt" @click="logout()" /></span>
    </div>
    <div class="align-self-center p-2" v-else>
      <router-link to="login" class="alink-header">Inicia sesión</router-link>
      <router-link to="register" class="alink-header">Regístrate</router-link>
    </div>

  </header>
</template>


<script>
    import SearchBar from '@/components/SearchBar';
    import firebase from 'firebase';

    export default {
        name:'AppHeader',
        components: {
            SearchBar, 
         },
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
         methods: {
          logout: function() {
            firebase.auth().signOut().then(() => {
                firebase.auth().onAuthStateChanged(() => {
                  this.$router.push('/login')
                })
              })
          }
         }
    }
</script>


<style lang="scss">
  .header{
      box-shadow: 0 0 10px -5px #999;
      background-color: #fff;
      position:fixed;
      z-index: 999;

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

      .logo-cabecera{
          width:130px;
          height:auto;
          margin-left:12px;
      }

      .nombre-usuario,.alink-header{
          font-size: 0.7rem;
          font-weight: 600;
          margin-right:10px;
      }  

      .ico-usuario{
          background-color: #eee;
          padding:6px;
          border-radius: 50%;
          font-size:0.8rem;
          margin-right:10px;
      }

      .ico-logout{
        cursor: pointer;
        &:hover{
          color:red;
        }
      }

      
  }

</style>