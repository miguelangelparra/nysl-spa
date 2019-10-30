<template>
  <div class="container-fluid fondo-main">
    <Nav />
    <Header class="fondo-grass" />
    <!--Container Principal-->
    <h1 class="fondo-oscuro center z-depth-3">About Us</h1>
    <br />
    <div class="container">
      <ul class="collapsible popout">
        <li class="active">
          <div class="collapsible-header">
            <i class="material-icons">chevron_right</i> Mission
          </div>
          <div class="collapsible-body">
            <span>To support young atheletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to lean and practice skills related to the game od soccer, specifically those skills arpund tema cooperation and good sportsmanship.</span>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="material-icons large">chevron_right</i> Vision
          </div>
          <div class="collapsible-body">
            <span>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self discipline, and leadership.</span>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="material-icons large">chevron_right</i> General Information
          </div>
          <div class="collapsible-body">
            <span>The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neigborhoods an enviroment in wich to learn and play soccer. To be a member of NYSL, you must be between the ages old 4 -12 and reside in a Chicago northside neghborhood. NYSL is ran by a small full-time staff, and relies on the generous volunteer time of parents and previous league members.</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";

export default {
  name: "about",
  components: {
    Nav,
    Header
  },
  mounted() {
    //Inicializador de plugins de Materialize
    M.AutoInit();
  }
};
</script>
  
