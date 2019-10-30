<template>
  <div class="container-fluid">
    <!--Container Principal-->
    <!--Mensaje Central-->
    <div class="container-fluid center-align">
      <div class="row notDisplayLandscape">
        <div class="col s12 fondo-oscuro">
          <h3 class="white-text">Select what you need to know:</h3>
        </div>
      </div>
      <div class="row">
        <button class="btn col s12 l8 offset-l2 orange modal-trigger" data-target="modalToFilter">
          <i class="material-icons left">build</i>Filters
        </button>
      </div>
      <!--Tabla de Juegos Filtradas-->
      <div class="row">
        <div class="col s12 offset-l2 l8" id="divTabla">
          <table class="centered">
            <!--Thead-->
            <thead>
              <tr>
                <th>
                  Date
                  <i class="tiny material-icons">date_range</i>
                </th>
                <th>
                  Teams
                  <i class="tiny material-icons">group</i>
                </th>
                <th>
                  Time
                  <i class="tiny material-icons">schedule</i>
                </th>
                <th>
                  Location
                  <i class="tiny material-icons">room</i>
                </th>
              </tr>
            </thead>
            <!--TBody-->
            <tbody>
              <tr v-for="(game,id) in toFilter" :key="id" @click="toGameDetails()">
                <td :id="game.id">{{game.month}}/{{game.day}}</td>
                <td :id="game.id">{{game.t1}} vs {{game.t2}}</td>
                <td :id="game.id">{{game.time}}</td>
                <td :id="game.id">{{game.location}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id="modalToFilter" class="modal">
      <i class="material-icons right modal-close red" id="icon-close">clear</i>
      <div class="modal-content fondo-oscuro">
        <div class="row">
          <div class="col s6">
            <h4 class="center">
              <u>Months</u>
            </h4>
            <!--Selects para filtrar-->
            <!--Select Month-->
            <div class="input-field center">
              <div v-for="month in months" :key="month.value">
                <div class="switch">
                  <label>
                    {{month.name}}
                    <input
                      type="checkbox"
                      v-bind:value="month.value"
                      v-model="filters"
                    />
                    <span class="lever"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="col s6">
            <h4 class="center">
              <u>Teams</u>
            </h4>
            <!--Select Team-->
            <div class="input-field center">
              <div v-for="team in teams" :key="team.value">
                <div class="switch">
                  <label>
                    {{team}}
                    <input
                      type="checkbox"
                      v-bind:value="team"
                      :name="teams"
                      v-model="filters"
                    />
                    <span class="lever"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="center">
              <button id="btnApply" class="modal-close teal btn-large">Apply Filters!</button>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "Schedule",
  data() {
    return {
      filters: []
    };
  },
  computed: {
    ...mapState(["monthSelected", "months", "teamSelected", "teams", "games"]),
    ...mapGetters(["gamesFiltered", "filtered"]),
    toFilter() {
      let filtrados = this.games.filter(game => {
        return this.filters.includes(game.t1 || game.t2);
      });
      let filtradosV2 = filtrados.filter(game => {
        return this.filters.includes(game.month);
      });
      return filtradosV2;
    }
  },
  methods: {
    ...mapMutations(["toSelectTeam", "toSelectMonth", "toSetFilters"]),

    toGameDetails() {
      this.$router.push("/gameDetails/" + event.target.attributes.id.value);
    },
    toSetAllFilters() {
      let months = this.months.map(month => {
        return this.filters.push(month.value);
      });
      let teams = this.teams.map(team => {
        return this.filters.push(team);
      });
    }
  },
  mounted() {
    this.toSetAllFilters();
  }
};
</script>
