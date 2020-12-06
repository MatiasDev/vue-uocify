<template>
    <main class="page-register">

      <section class="box-auth">
        <img class="logo" alt="logo" src="@/assets/icon.svg">
        <h1 class="main-title">Registro</h1>
        <p class="auth-intro">Regístrate en uocify para disfrutar de miles de canciones.</p>

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

          <button class="btn btn-primary btn-lg" @click="checkForm">Registrar</button>
        </form>

        <p class="auth-bottom">¿Ya tienes cuenta?   <router-link to="login" class="alink">Inicia sesión</router-link></p>
      </section>

    </main>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'register',
  data: function() {
    return {
      errors: [],
      email: null,
      password: null
    };
  },
  methods: {
    register: function(e) {
      console.log("VAMOS A FIREBASE")
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // now we have access to the signed in user
          const user = firebase.auth().currentUser;
          console.log(user)
        })
        .catch(error => {
          // catch any errors
          console.log(error);
        });
      e.preventDefault();
    },
    checkForm: function (e) {
      if (this.email && this.password) {
         this.register(e);
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

    .page-register{
        display: flex;
        flex-direction: column;
        height: 100%;

        .main-title {
            margin-bottom: 20px;
        }

        ul{
          list-style-type: none;
          margin:0;
          padding:0
        }
    }


</style>