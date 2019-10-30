//imports de vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//imports de estilos
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import './assets/styles/styles.css'
//Imports de firebase
import firebase from 'firebase'
import 'firebase/firebase-app.js'
require('firebase/app')
require('firebase/database')
require('firebase/auth')

//Configuracion de firebase
var firebaseConfig = {
  apiKey: "AIzaSyDDL3Z1ueXHKszmgPKvD9OCFkZ1t-gv_Aw",
  authDomain: "nysl-miguelangel.firebaseapp.com",
  databaseURL: "https://nysl-miguelangel.firebaseio.com",
  projectId: "nysl-miguelangel",
  storageBucket: "",
  messagingSenderId: "316724951957",
  appId: "1:316724951957:web:66b2376d388a30f7"
};
// Initializacion de  Firebase
firebase.initializeApp(firebaseConfig);

//Asuntos propios de vue
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


