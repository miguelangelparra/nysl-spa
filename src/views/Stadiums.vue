<template>
  <div class="container-fluid fondo-main">
    <!--Nav-->
    <Nav />
    <!--Header-->
    <Header class="hide-on-med-and-down fondo-grass" />
    <h1 class="fondo-oscuro center z-depth-3">Stadiums</h1>
    <br />
    <br />
    <!--Componente Principal-->
    <Stadiums />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Stadiums from "@/components/Stadiums.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "stadiums",
  components: {
    Header,
    Stadiums,
    Nav
  },
  mounted() {
  //Inicializador de plugins de Materialize
    M.AutoInit();
  }
};
</script>