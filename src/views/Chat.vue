<template>
  <div class="modal-content fondo-oscuro">
    <div class="row sin-M-B">
      <div class="col s12 center" v-for="game in gameSelected" :key="game.id">
        <h3 class="orange-text">
          <b>{{game.t1}} vs {{game.t2}}</b>
        </h3>
        <h5>{{game.day}}/{{game.month}} - {{game.time}}</h5>
      </div>
    </div>
    <hr class="white-text" />

    <div class="row">
      <div id="chat" class="col s12 right">
        <!--Renderiza mensajes tomados del state-Firebase-->
        <ul id="chatList" v-for="message in messages" :key="message.key">
          <li class="small-typography">{{message.date}}</li>
          <li class="orange-text">
            <u>{{message.user}}:</u>
          </li>
          <li class="large-typography">{{message.message}}</li>
        </ul>
      </div>
    </div>
    <hr class="white-text" />
    <!--Llama al componente que envia mensajes a Firebase-->
    <div class="row">
      <div v-show="!user">
        <p>To send a message</p>
        <button class="btn modal-trigger" data-target="modalSignIn">Sign in</button>
      </div>
      <div v-show="user">
        <NewMessage />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage.vue";

import { mapState, mapActions } from "vuex";

export default {
  name: "Chat",
  components: {
    NewMessage
  },
  data: function() {
    return {};
  },
  computed: {
    //Refiere a variable donde se depositan mensajes traidos de firebase
    ...mapState(["messages", "user", "games"]),
    gameSelected(state) {
      let gameFiltered = state.games.filter(game => {
        return game.id == this.$route.params.id;
      });
      return gameFiltered;
    }
  },
  methods: {
    //Refiere a action que conecta con firebase
    ...mapActions(["getMessages"]),
    scroll() {
      let chatContainer = document.getElementById("chat");
      chatContainer.scrollTo(0, chatContainer.scrollHeight);
    }
  },
  mounted() {
    //Inicializador de plugins de Materialize
    M.AutoInit();
    // Ejecuta action para inicializar la toma de mensajes de Firebase
    this.getMessages(this.$route.params.id);
  },
  updated() {
    this.scroll();
  }
};
</script>
<style>
#chat {
  height: 80vw;
  text-align: left;
}
.sin-M-B {
  margin-bottom: 0;
}
</style>
