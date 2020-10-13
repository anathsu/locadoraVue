<template>
  <div id="app">
    <h2>{{ msg }}</h2>
    <HelloWorld msg="Bem vindo a locadora de Filmes!"/>

    

    <div class="horas">
      <p>{{dia()}}</p>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }, data(){
    return {
      title: "Locado de Filmes",
      horas: new Date().getHours()
    }
  }, methods:{
    dia(){
      if(this.horas < 12){
        return "Está de dia";
      }else if(this.horas >=12 && this.horas < 18){
        return "Está de tarde";
      }else if(this.horas > 18){
        return "Está de noite";
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
