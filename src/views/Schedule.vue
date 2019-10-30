
<template>

  <div class="container-fluid fondo-main">
    <!--Nav-->
    <Nav />
    <!--Header-->
    <Header class="hide-on-med-and-down fondo-grass" />
    <!--Componente Principal-->
    <Schedule class="col s6"></Schedule>
  </div>

</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Schedule from "@/components/Schedule.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "schedule",
  components: {
    Header,
    Schedule,
    Nav
  },
  mounted() {
    //Inicializador de plugins de Materialize
    M.AutoInit();
  }
};
</script>