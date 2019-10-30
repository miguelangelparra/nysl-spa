<template>
  <div>
    <form @submit.prevent>
      <input class="white-text"
        type="text"
        v-model="NewMessage"
        @keypress.enter="sendMessage()"
        placeholder="Write a message and Press Enter"
      />
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapState } from 'vuex';

export default {
  name: "NewMessage",
  data: function() {
    return {
      NewMessage: null
    };
  },
  computed:{
    ...mapState(["user"])
  },

  methods: {
    sendMessage() {
      let time= new Date();
      let timeConvert = time.toLocaleString()
      firebase
        .database()
        .ref("chat/" + this.$route.params.id)
        .push({
          message: this.NewMessage,
          user: this.user.displayName,
          date: timeConvert
        });
      this.NewMessage = "";
    }
  }
};
</script>
