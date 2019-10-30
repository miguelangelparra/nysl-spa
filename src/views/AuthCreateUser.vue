<template>
  <div class="container">
    <div class="row">
      <form class="col s12 offset-l2 l8" @submit.prevent>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">account_box</i>
            <input
              v-model="displayName"
              id="first_name"
              type="text"
              minlength="3"
              maxlength="10"
              class="validate white-text"
              required
            />
            <label for="first_name">Display Name</label>
            <span class="helper-text" data-error>Select a display name</span>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">local_post_office</i>
            <input v-model="email" id="email" type="email" class="validate white-text" required />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">vpn_key</i>
            <input v-model="password" id="password" type="password" class="validate white-text" required />
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">vpn_key </i>
            <input
              v-model="passwordConfirm"
              id="passwordConfirm"
              type="password"
              class="validate white-text"
              required
            />
            <label for="passwordConfirm">Confirm Password</label>
          </div>
        </div>

        <div class="row">
          <button class="col s6 btn red modal-close">Cancel</button>
          <button class="col s6 btn modal-close" @click="toCreateUser()">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>

import firebase from "firebase";

export default {
  name: "CreateUser",
  components: {
  },
  data: function() {
    return {
      email: null,
      password: null,
      passwordConfirm:null,
      name: null,
      displayName: null
    };
  },
  methods: {
    toCreateUser(data) {
      if(this.passwordConfirm !== this.password){return alert("Passwords doesn´t match!"); return }
      let name = this.displayName;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(function(user) {
          firebase.auth().currentUser.updateProfile({ displayName: name });
        })
        .then(() => {
          M.Modal.getInstance(
            document.getElementById("modalCreateUser")
          ).close();
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });

    }
  },
  mounted() {
    //Inicializador de plugins de Materialize
    M.AutoInit();
  }
};
</script>
