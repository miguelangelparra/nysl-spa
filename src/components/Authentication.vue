<template >
  <div class="fondo-oscuro center" >
    <h3 v-show="user"><span class="white-text">User: </span> <span class="orange-text">{{user.displayName}}</span> </h3>
      <div v-show="!user" class="row">
        <div class="col s12 center">
          <button v-show="!user" class="btn teal modal-trigger" data-target="modalSignIn">Sign In</button>
        </div>
      </div>
    <div v-show="!user">
      <p class="white-text">
        Don't you have an account yet?
        <a class="modal-trigger orange-text" data-target="modalCreateUser">Create User</a>
      </p>
    </div>
    <div v-show="user">
      <div class="row center">
        <div class="col s12">
      <button @click="toSignOut()" class="btn red">Sign Out</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import firebase from "firebase";

export default {
  name: "Authentication",
  computed: {
    ...mapState(["statusUser", "user"])
  },
  methods: {
    ...mapActions(["toAuthentication"]),

    toSignOut() {
      firebase.auth().signOut();
      
    }
  },
  mounted() {
    this.toAuthentication();
  },
  update(){
    this.toAuthentication()
  }
};
</script>
