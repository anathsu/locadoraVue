<template>

  <div>
    <b-container>

      <b-row>
          <h1>{{title}}</h1>
      </b-row>

      <b-row>
        <h3 v-if="horas >= 9 && horas < 17" id="aberta">ABERTO</h3>
        <h3 v-else-if="horas >= 17 && horas < 18" id="proxima-fechar">PRÓXIMA DE FECHAR</h3>
        <h3 v-else id="fechada">FECHADA</h3>
      </b-row>

      <b-row class="top">
        <HelloWorld msg="Filmes encontrados"/>
      </b-row>

      <b-row>
        <ListarFilmes :carrinho="carrinho"/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ListarFilmes from './ListarFilmes.vue';
import HelloWorld from './HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ListarFilmes,
  }, data(){
    return {
      title: "Locadora de Filmes",
      horas: new Date().getHours(),
      primeiroNome: "Willian",
      segundoNome: "Nascimento",
      carrinho: [],
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
    },
  },
}
</script>

<style>

.top{
  padding-top: 20px;
}

.row{
  justify-content: center;
}

.cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}

.unitCard:hover{
  border: rgb(11, 212, 135) 2px solid;
}
.btn:hover{
  background-color: rgb(16, 90, 226);

}

.usuarioLogado{
  text-align: right;
}

#aberta {
  color: rgb(11, 212, 135);
}
 
#proxima-fechar {
  color: orange;
}
 
#fechada {
  color: red;
}

.block{
  display: block;
}
</style>
