<template>
  <div class="container-fluid fondo-main">
    <!--Nav-->
    <Nav />
    <!--Header-->
    <Header class="hide-on-med-and-down fondo-grass" />
    <h2 class="fondo-oscuro center z-depth-3">Details</h2>
    <!--Componentes Principales-->
    <div class="row center-align">
      <Schedule class="col tamano50 landscape"></Schedule>
      <GameDetails class="col tamano50"></GameDetails>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import GameDetails from "@/components/GameDetails.vue";
import Schedule from "@/components/Schedule.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "gameDetails",
  components: {
    Header,
    GameDetails,
    Schedule,
    Nav,
  },

  mounted() {
    //Inicializador de plugins de Materialize
    M.AutoInit();
  }
};
</script>
