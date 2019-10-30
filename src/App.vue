<template>
  <div>
    <router-view />

    <div id="modalSignIn" class="modal">
        <AuthSignIn />
        <Authentication v-show="user" />
      </div>

    <div id="modalCreateUser" class="modal">
      <div class="modal-content">
        <h4 class="center">Create User</h4>
        <p>Welcome !</p>
        <p>It is a pleasure that you are part of our team, enter your email and password to create a user.</p>
        <AuthCreateUser />
      </div>
    </div>
  </div>
</template>

<script>
import AuthSignIn from "@/views/AuthSignIn.vue";
import AuthCreateUser from "@/views/AuthCreateUser.vue";
import Authentication from "@/components/Authentication.vue";
import { mapState } from 'vuex';

export default {
  name: "app",
  components: {
    AuthSignIn,
    AuthCreateUser,
    Authentication
  },
      computed: {
    ...mapState(["user"])
  },

};
</script>
