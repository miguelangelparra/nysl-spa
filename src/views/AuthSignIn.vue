<template>
  <div v-show="!user" class="modal-content">
    <h4 class="center">Sign In</h4>
    <p>Welcome !</p>
    <p>It's a pleasure to have you back, enter your email and password.</p>
    <div class="container">
      <div class="row">
        <form class="col s12 offset-l2 l8" @submit.prevent>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">local_post_office</i>
              <input v-model="email" id="email" type="email" class="validate white-text" />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">vpn_key</i>
              <input v-model="password" id="password" type="password" class="validate white-text" />
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <button class="col s6 btn red modal-close">Cancel</button>
            <button class="col s6 btn modal-close" @click="toSignIn()">Sign In</button>
            <div class="row">
              <div class="col s12">
                <p>
                  Don't you have an account yet?
                  <a
                    @click="toCloseModal"
                    class="modal-trigger orange-text"
                    data-target="modalCreateUser"
                  >Create User</a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

import firebase from "firebase";
import { mapState } from "vuex";

export default {
  name: "AuthSignIn",
  components: {
  },
  data: function() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    toSignIn(data) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    },
    toCloseModal() {
      M.Modal.getInstance(document.getElementById("modalSignIn")).close();
    }
  },
  mounted() {
    //Inicializador de plugins de Materialize
    M.AutoInit();
  }
};
</script>
