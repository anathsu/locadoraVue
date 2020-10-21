<template>
  <!-- <div id="app">
    <h2>{{ msg }}</h2>
    <HelloWorld msg="Bem vindo a locadora de Filmes!"/>

    <div class="horas">
      <p>{{dia()}}</p>
    </div>

  </div> -->
  <b-container>
    <b-row>
      <h2>{{ msg }}</h2>
    </b-row>

    <b-row>
      <HelloWorld msg="Bem vindo a locadora de Filmes!"/>
    </b-row>

    <b-row>
      <p>{{dia()}}</p>
    </b-row>

    <b-row>
      <div class="cards">
        <b-card v-bind:key="filme.id" v-for="filme in filmes"
          :title="filme.titulo | maiuscula()"
          :img-src="filme.imagem"
          :img-alt="filme.descricao"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 unitCard"
        >
          <b-card-text>
            {{filme.descricao | maiuscula()}}
          </b-card-text>

          <b-card-text>
            {{filme.valor | formatarPreco("R$")}}
          </b-card-text>

          <b-button class="btn" href="#" block variant="primary">Alugar</b-button>
        </b-card>

      </div>
    </b-row>

  </b-container>


</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  }, data(){
    return {
      title: "Locado de Filmes",
      horas: new Date().getHours(),
      filmes: [
        { id: 1, titulo: "Homem de Ferro", descricao: "Onde nasce o herói", valor: 25, imagem: "https://i.imgur.com/OA8pDFM.jpeg" },
        { id: 2, titulo: "Pantera Negra", descricao: "Um filme de panteras", valor: 35, imagem: "https://i.imgur.com/JOSEGKf.jpeg" },
        { id: 3, titulo: "Homem-Formiga", descricao: "Um filme de formigas", valor: 20, imagem: "https://i.imgur.com/zdi4zcy.jpeg" },
        { id: 4, titulo: "Capitã Marvel", descricao: "Um filme de capitãs", valor: 40, imagem: "https://i.imgur.com/39aIfzI.jpeg" },
        { id: 5, titulo: "Hulk", descricao: "Um filme de força", valor: 10, imagem: "https://i.imgur.com/0uthCmp.jpeg" },
        { id: 6, titulo: "Homem Aranha - Longe de Casa", descricao: "Um filme de aranhas voadoras", valor: 11, imagem: "https://i.imgur.com/H1cRygg.jpeg" }
      ]
    }
  },
  methods:{
    dia(){
      if(this.horas < 12){
        return "Está de dia";
      }else if(this.horas >=12 && this.horas < 18){
        return "Está de tarde";
      }else if(this.horas > 18){
        return "Está de noite";
      }
    }
  },
  filters: {
    formatarPreco: function(preco, simbolo) {
      if(!parseInt(preco)) {
        return "";
      }
      var precoFormatado = (preco.toFixed(2)).replace('.', ',');
      return simbolo + " " + precoFormatado;
    },
    maiuscula: function(string){
      return string.toUpperCase();
    }
  }
}
</script>

<style>

.row{
  justify-content: center;
}

.cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  /* padding: 5px; */
}

.unitCard:hover{
  border: rgb(7, 235, 56) 5px solid;
}
.btn:hover{
  background-color: blueviolet;

}



/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
