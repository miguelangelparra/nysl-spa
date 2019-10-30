<template>
  <div class="container-fluid fondo-main">
    <Nav />
    <Header class="fondo-grass" />
    <h1 class="fondo-oscuro center z-depth-3">Schedule</h1>
    <br />

    <!--Container Principal-->
    <div class="container-fluid center-align">
      <div class="container">
        <div class="row ">
          <div class="col s12">
            <div class="card orange z-depth-4">
              <div class="card-content white-text">
                <h3>Select what you need to know:</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Routers-->
      <div class="row center">
        <!--Router Schedule-->
        <div class="col s12 offset-l1 l5 ">
          <router-link
            to="/schedule"
            class="col s12 btn z-depth-1 waves-effect waves-light btn-large dorado-claro z-depth-4"
          >
            <i class="material-icons">access_time</i> Schedule
          </router-link>
        </div>

        <!--Div para maquetado en dispositivos anchos-->
        <div class="col l4"></div>
        <!--Router Location-->
        <div class="col s12 l5">
          <router-link
            to="/stadiums"
            class="col s12 btn z-depth-1 waves-effect waves-light btn-large dorado-claro z-depth-4"
          >
            <i class="material-icons">room</i> Stadiums
          </router-link>
        </div>
      </div>
      <div class="row hide-on-med-and-down">
        <div class="col s12">
          <img
            id="animatedBall"
            alt="animated Ball"
            class="responsive-image"
            src="../assets/images/Soccer_ball_animated.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";

export default {
  name: "information",
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
