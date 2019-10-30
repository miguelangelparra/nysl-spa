<template>
  <div class="container-fluid fondo-main">
    <Nav />

    <Header class="fondo-grass" />
    <div class="row">
      <h1 class="col s12 center fondo-oscuro z-depth-3">Events</h1>
    </div>
    <!--Cards para eventos-->
    <div class="container">
      <div class="row">
        <div class="col s12 offset-m1 m9">
          <div class="card orange darken-1">
            <div class="card-content white-text">
              <span class="card-title">August 4</span>
              <p>NYSL Fundraiser</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 offset-m2 m9">
          <div class="card orange darken-1">
            <div class="card-content white-text">
              <span class="card-title">August 16</span>
              <p>Season Kick-off: Meet the Teams</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 offset-m3 m9">
          <div class="card orange darken-1">
            <div class="card-content white-text">
              <span class="card-title">September 1</span>
              <p>First Game of the Season (Check Game Schedule for details)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "home",
  components: {
    Header,
    Nav
  },
  mounted() {
    //Inicializador de plugins de Materialize
    M.AutoInit();
  }
};
</script>