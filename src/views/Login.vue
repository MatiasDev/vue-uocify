<template>
  <main class="page-login">

    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg">
      <h1 class="main-title">Iniciar sesión</h1>
      <p class="auth-intro">Inicia sesión en uocify para disfrutar de miles de canciones.</p>

      <form>
          <div class="form-group">
            <label class="form-label" for="username">Email</label>
            <input v-model="email" placeholder="Correo electrónico" type="email" id="email" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Contraseña</label>
            <input v-model="password" placeholder="Contraseña" type="password" id="password" class="form-control">
          </div>

          <p v-if="errors.length" class="alert alert-danger form-group">
            <b class="text-danger">Por favor complete el formulario</b>
            <ul>
              <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
          </p>

          <button class="btn btn-primary btn-lg" @click="checkForm">Iniciar sesión</button>
      </form>



      <p class="auth-bottom">¿No tienes cuenta?    <router-link to="register" class="alink">Regístrate</router-link></p>
    </section>

  </main>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'login',
  data: function() {
    return {
      errors: [],
      email: null,
      password: null
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // now we have access to the signed in user
          const user = firebase.auth().currentUser;
          console.log("Sesión iniciada correctamente con el correo: "+user.email);
          this.$router.push('/')
        })
        .catch(error => {
          // catch any errors
          console.log(error);
        });
      e.preventDefault();
    },
    checkForm: function (e) {
      if (this.email && this.password) {
        this.login(e);
      }

      this.errors = [];

      if (!this.email) {
        this.errors.push('El email es obligatorio.');
      }
      if (!this.password) {
        this.errors.push('La contraseña es obligatoria.');
      }

      e.preventDefault();
    }
  }
};
</script>


<style lang="scss" >

    .page-login{
      ul{
        list-style-type: none;
        margin:0;
        padding:0
      }
    }

</style>