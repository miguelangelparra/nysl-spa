<template>
  <div class="container-fluid fondo-main">
    <Nav />
    <Header class="fondo-grass" />
    <!--Container Principal-->
    <h1 class="fondo-oscuro center z-depth-3">Contact Us</h1>
    <br />

    <div class="row">
      <div class="col s12 offset-m2 m8">
        <div class="card orange darken-1">
          <div class="card-content white-text center">
            <span class="card-title"></span>
            <p>
              Please email us at
              <a
                class="yellow-text"
                href="mailto:nysl@chisoccer.org"
              >nysl@chisoccer.org</a>
              <br />We will reply to your email as soon as we can.
            </p>
          </div>
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
  name: "contact",
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