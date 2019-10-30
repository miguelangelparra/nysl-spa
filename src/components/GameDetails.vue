<template>
  <div class="container-fluid center-align">
    <div class="row notDisplayLandscape dorado-claro z-depth-5" v-for="game in gameSelected" :key="game.id">
      <div class="col s6 notDisplayLandscape">
        <h4>{{game.day}}/{{game.month}}</h4>
      </div>
      <div class="col s6 notDisplayLandscape">
        <h4>{{game.time}}</h4>
      </div>
      <div class="col s12 center-align notDisplayLandscape">
        <h3>{{game.t1}} vs {{game.t2}}</h3>
      </div>
    </div>

    <div class="row">
      <div class="col s12 dorado-claro z-depth-2">
        <h5>{{mapAddress}}</h5>
      </div>
      <div class="col s12">
        <iframe
          id="iframeMap"
          :src="mapUrl"
          width="100%"
          height="auto"
          frameborder="0"
          style="border:0"
          allowfullscreen
          class="z-depth-2"
        ></iframe>
      </div>
    </div>
        <!--Boton que enruta a chatRoom-->
    <div class="row center-align">
      <!-- <button class="btn btn-large orange" @click="toChatRoom()">Go To Chat Room!</button> -->
      <button class="btn btn-large orange modal-trigger" data-target="modalChat">Go To Chat Room!</button>
    </div>
    <div id="modalChat" class="modal">
      <i class="material-icons right modal-close red" id="icon-close">clear</i>
      <Chat />
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex";
import Chat from "@/views/Chat.vue";


export default {
  name: "GameDetails",
  components:{
    Chat
  },
  data: function() {
    return {
      locationGameFiltered: "",
      mapUrl: "",
      mapAddress: ""
    };
  },  methods: {
    //Metodo que enruta a chatroom
    toChatRoom() {
      this.$router.push("/Chat/" + this.$route.params.id);
    }
  },
  computed: {
    ...mapState(["games", "stadiums"]),


    gameSelected(state, data) {
      let gameFiltered = state.games.filter(game => {
        return game.id == this.$route.params.id;
      });
      //MAP
      this.locationGameFiltered = gameFiltered[0].location;
      let stadiumFiltered = this.stadiums.filter(stadium => {
        return stadium.id == this.locationGameFiltered;
      });
      this.mapUrl = stadiumFiltered[0].url;
      this.mapAddress = stadiumFiltered[0].address;
      return gameFiltered;
    }
  }
};
</script>
