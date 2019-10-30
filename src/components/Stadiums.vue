<template>
  <div class="container-fluid center-align">
    <!--Selects para filtrar-->
    <!--Select Stadium-->
    <div class="row container">
      <div class="input-field col s12 ">
        <select id="idSelectStadium" @change="toSelectStadium()">
          <option value>Select one stadium:</option>
          <option
            v-for="stadium in stadiums"
            v-bind:value="stadium.id"
            :key="stadium.id"
          >{{stadium.name}}</option>
        </select>
        <label>Stadiums:</label>
      </div>
    </div>

    <div class="row ">
      <div class="col s12">
        <iframe
          id="iframeMap"
          width="80%"
          height="auto"
          frameborder="0"
          style="border:0"
          allowfullscreen
          class="z-depth-2"
        ></iframe>
      </div>
    </div>

    <div class="row container">
      <div class="col s12 dorado-claro z-depth-4">
        <h5 >{{mapAddress}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex";
export default {
  name: "Stadiums",
  data: function() {
    return { mapAddress: "" };
  },

  computed: {
    ...mapState(["stadiums"])
  },

  methods: {
    toSelectStadium() {
      let stadiumSelected = this.stadiums.filter(stadium => {
        return stadium.id == document.getElementById("idSelectStadium").value;
      });
      this.mapAddress = stadiumSelected[0].address;

      let iframeMap = document.getElementById("iframeMap");
      iframeMap.setAttribute("src", stadiumSelected[0].url);
    }
  }
};
</script>