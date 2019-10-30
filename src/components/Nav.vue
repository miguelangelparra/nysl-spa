     <template>
  <div>
    <nav>
      <div class="nav-wrapper fondo-oscuro">
        <img
          class="responsive-image brand-logo hide-on-large-only"
          id="logo-nav"
          src="../assets/images/nysl_logo.png"
          alt="logo"
        />
        <a href="#!" class="brand-logo hide-on-med-and-down">Northside Youth Soccer League</a>
        <a href="#" data-target="mobile-nav" class="sidenav-trigger right">
          <i class="material-icons">menu</i>
        </a>

        <!--  <a
          id="boton"
          class="left btn-large halfway-fab waves-effect waves-light orange hide-on-large-only btn-floating"
          @click="backHistory()"
        >
          <i class="material-icons">arrow_back</i>
        </a>-->
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/information">Information</router-link>
          </li>
          <li>
            <router-link to="/registration">Register</router-link>
          </li>
          <li>
            <router-link to="/rules">Rules</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li>
            <a class="modal-trigger" href="#!" data-target="modalSignIn">
              <i class="left material-icons right">account_circle</i>
              <span class="white-text">User:</span>
              <span class="orange-text">{{user.displayName}}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!--Sidenav para moviles-->
    <ul class="sidenav fondo-oscuro" id="mobile-nav">
      <li>
        <router-link class="sidenav-close white-text" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="sidenav-close white-text" to="/about">About</router-link>
      </li>
      <li>
        <router-link class="sidenav-close white-text" to="/information">Information</router-link>
      </li>
      <li>
        <router-link class="sidenav-close white-text" to="/registration">Register</router-link>
      </li>
      <li>
        <router-link class="sidenav-close white-text" to="/rules">Rules</router-link>
      </li>
      <li>
        <router-link class="sidenav-close white-text" to="/contact">Contact</router-link>
      </li>
      <hr />
      <Authentication  />
    </ul>
  </div>
</template>
     

  <script>
import Authentication from "@/components/Authentication.vue";
import { mapState } from "vuex";

export default {
  name: "Nav",
  components: {
    Authentication
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
   /* backHistory() {
      this.$router.go(-1);
    }*/
  }
};
</script>