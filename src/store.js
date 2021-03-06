//Imports de vue
import Vue from 'vue'
import Vuex from 'vuex'
//Imports de firebase
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: false,
    months: [{
      "name": "September",
      "value": 9
    },
    {
      "name": "October",
      "value": 10
    }
    ],
    teams: ["U1", "U2", "U3", "U4", "U5", "U6"],
    games: [{
      "id": "A001",
      "month": 9,
      "day": 1,
      "t1": "U1",
      "t2": "U4",
      "location": "AJ Katzenmaier",
      "time": "9:30am"
    },
    {
      "id": "A002",
      "month": 9,
      "day": 1,
      "t1": "U3",
      "t2": "U2",
      "location": "Greenbay",
      "time": "1:00pm"
    },
    {
      "id": "A003",
      "month": 9,
      "day": 8,
      "t1": "U5",
      "t2": "U6",
      "location": "Howard A Yeager",
      "time": "9:30am"
    },
    {
      "id": "A004",
      "month": 9,
      "day": 8,
      "t1": "U6",
      "t2": "U1",
      "location": "Marjorie P Hart",
      "time": "1:00pm"
    },
    {
      "id": "A005",
      "month": 9,
      "day": 15,
      "t1": "U2",
      "t2": "U4",
      "location": "North",
      "time": "9:30am"
    },
    {
      "id": "A006",
      "month": 9,
      "day": 15,
      "t1": "U3",
      "t2": "U5",
      "location": "AJ Katzenmaier",
      "time": "1:00pm"
    },
    {
      "id": "A007",
      "month": 9,
      "day": 22,
      "t1": "U1",
      "t2": "U3",
      "location": "South",
      "time": "9:30am"
    },
    {
      "id": "A008",
      "month": 9,
      "day": 15,
      "t1": "U2",
      "t2": "U6",
      "location": "Howard A Yeager",
      "time": "1:00pm"
    },
    {
      "id": "A009",
      "month": 9,
      "day": 29,
      "t1": "U4",
      "t2": "U5",
      "location": "Greenbay",
      "time": "9:30am"
    },

    {
      "id": "A010",
      "month": 10,
      "day": 6,
      "t1": "U2",
      "t2": "U5",
      "location": "Marjorie P Hart",
      "time": "9:30am"
    },
    {
      "id": "A011",
      "month": 10,
      "day": 6,
      "t1": "U1",
      "t2": "U6",
      "location": "South",
      "time": "1:00pm"
    },
    {
      "id": "A012",
      "month": 10,
      "day": 13,
      "t1": "U3",
      "t2": "U4",
      "location": "Howard A Yeager",
      "time": "9:30am"
    },
    {
      "id": "A013",
      "month": 10,
      "day": 13,
      "t1": "U5",
      "t2": "U1",
      "location": "Greenbay",
      "time": "1:00pm"
    },
    {
      "id": "A014",
      "month": 10,
      "day": 20,
      "t1": "U6",
      "t2": "U3",
      "location": "North",
      "time": "9:30am"
    },
    {
      "id": "A015",
      "month": 10,
      "day": 20,
      "t1": "U2",
      "t2": "U4",
      "location": "Marjorie P Hart",
      "time": "1:00pm"
    },
    {
      "id": "A016",
      "month": 10,
      "day": 27,
      "t1": "U3",
      "t2": "U1",
      "location": "AJ Katzenmaier",
      "time": "9:30am"
    },
    {
      "id": "A017",
      "month": 10,
      "day": 27,
      "t1": "U5",
      "t2": "U6",
      "location": "Howard A Yeager",
      "time": "1:00pm"
    },
    ],
    stadiums: [{
      "id": "AJ Katzenmaier",
      "name": "AJ Katzenmaier Elementary",
      "address": "24 W. Walton St., Chicago, IL 60610",
      "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6540604261522!2d-87.63123908518452!3d41.90029637200495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1553183743128"
    },
    {
      "id": "Greenbay",
      "name": "Greenbay Elementary",
      "address": "1734 N. Orleans St., Chicago, IL 60614",
      "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.025698674531!2d-87.64002798518399!3d41.913806271159046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1553183839639"
    },
    {
      "id": "Howard A Yeager",
      "name": "Howard A Yeager Elementary",
      "address": "2245 N. Southport Ave., Chicago, IL 60614",
      "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846726!2d-87.66511458518366!3d41.923268570566414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1553183886793"
    },
    {
      "id": "Marjorie P Hart",
      "name": "Marjorie P Hart Elementary",
      "address": "2625 N. Orchard St., Chicago, IL 60614",
      "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291728953075!2d-87.64808628518344!3d41.92958227017098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1553183960878"
    },
    {
      "id": "North",
      "name": "North Elementary",
      "address": "1409 N. Ogden Ave., Chicago, IL 60610",
      "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.336302541946!2d-87.64835588518424!3d41.90712867157718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af13a8945%3A0xb6ad1ec2b6f379ba!2s1409+N+Ogden+Ave%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1553183997753"
    },
    {
      "id": "South",
      "name": "South Elementary",
      "address": "2101 N. Fremont St., Chicago, IL 60614",
      "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7477648265626!2d-87.65355538518378!3d41.91978077078479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1553184045172"
    },
    ]
    ,
    messages: [],
    filters:[]
  },

  getters: {
    //filtra los equipos segun valor de los selects de meses y equipos
    gamesFiltered(state) {
      return (state.games.filter((game) => {
        return (
          (state.monthSelected == "All Months" || game.month == state.monthSelected) &&
          ((game.t1 == state.teamSelected || game.t2 == state.teamSelected) || state.teamSelected == "All Teams"))
      })
      )
    },
    filtered(state){
state.games.map((game)=>{
  return state.games.includes(state.filters)
})
    }
  },

  mutations: {

//Setea valores de usuario autenticado
    toSetUser(state, user) {
      state.user = user
    },

    //Setea los mensajes traidos de firebase en el state
    toUpdateMessages(state, messages) {
      state.messages = messages;
    },
  },
  
  actions: {
    toAuthentication({ commit }) {
      //Escuchador de autenticacion
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          commit("toSetUser", user)
        } else {
          commit("toSetUser", status)
        }
      });
    },

    //Conecta a firebase y busca los mensajes
    getMessages({ commit }, route) {
      firebase.database().ref('chat/' + route).on('value', function (snapshot) {
        var messages = snapshot.val();
        commit("toUpdateMessages", messages)
      })
    }
  },
})